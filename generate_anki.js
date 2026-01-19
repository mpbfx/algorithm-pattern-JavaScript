const fs = require('fs');
const path = require('path');

const summaryFile = path.resolve('HighFrequencyQuestionsSummary.md');
const linkedListFile = path.resolve('数据结构篇/链表.md');
const outputFile = path.resolve('anki_linkedlist.txt');

function escapeForAnki(text) {
    if (!text) return '';
    return text
        .replace(/\r\n/g, ' ')
        .replace(/\n/g, ' ')
        .replace(/\r/g, ' ')
        .replace(/\t/g, '    ');
}

/**
 * 简单的 JavaScript 语法高亮
 */
function highlightJS(code) {
    // 先转义 HTML 特殊字符
    let html = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // 关键字 - 紫色
    const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'while', 'for', 'break', 'continue', 'new', 'this', 'null', 'true', 'false', 'typeof', 'instanceof', 'class', 'extends', 'constructor', 'static', 'get', 'set', 'async', 'await', 'try', 'catch', 'throw', 'finally', 'of', 'in'];

    // 内置对象/方法 - 青色
    const builtins = ['Math', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Map', 'Set', 'console', 'prototype', 'length', 'push', 'pop', 'shift', 'unshift', 'slice', 'splice', 'concat', 'join', 'reverse', 'sort', 'filter', 'map', 'reduce', 'forEach', 'find', 'findIndex', 'includes', 'indexOf', 'fill', 'from', 'floor', 'ceil', 'max', 'min', 'abs', 'log', 'pow', 'sqrt', 'random', 'hasOwnProperty', 'toString', 'valueOf', 'substring', 'substr', 'split', 'trim', 'replace', 'match', 'test', 'exec', 'has', 'get', 'set', 'delete', 'add', 'clear', 'keys', 'values', 'entries', 'size', 'isEmpty'];

    // 注释 - 灰绿色 (先处理，避免被其他规则影响)
    html = html.replace(/(\/\/[^\n]*)/g, '<span style="color:#6A9955;">$1</span>');
    html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color:#6A9955;">$1</span>');

    // 字符串 - 橙色
    html = html.replace(/(&quot;[^&]*?&quot;|'[^']*?'|`[^`]*?`)/g, '<span style="color:#CE9178;">$1</span>');

    // 数字 - 浅绿色
    html = html.replace(/\b(\d+\.?\d*)\b/g, '<span style="color:#B5CEA8;">$1</span>');

    // 关键字高亮 - 紫色
    for (const kw of keywords) {
        const regex = new RegExp(`\\b(${kw})\\b`, 'g');
        html = html.replace(regex, '<span style="color:#C586C0;">$1</span>');
    }

    // 内置对象高亮 - 青色
    for (const builtin of builtins) {
        const regex = new RegExp(`\\b(${builtin})\\b`, 'g');
        html = html.replace(regex, '<span style="color:#4EC9B0;">$1</span>');
    }

    // 函数名 - 黄色 (函数定义和调用)
    html = html.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span style="color:#DCDCAA;">$1</span>(');

    // 箭头函数
    html = html.replace(/=&gt;/g, '<span style="color:#C586C0;">=&gt;</span>');

    return html;
}

function formatCodeForAnki(code) {
    if (!code) return '';

    // 应用语法高亮
    const highlighted = highlightJS(code.trim());

    // 换行转 <br>
    const withBreaks = highlighted
        .replace(/\r\n/g, '<br>')
        .replace(/\n/g, '<br>')
        .replace(/\r/g, '<br>')
        .replace(/\t/g, '    ');

    // 返回带样式的代码块
    return `<div style='background:#1e1e1e; color:#d4d4d4; padding:15px; border-radius:8px; font-family:Consolas,Monaco,\"Courier New\",monospace; font-size:13px; line-height:1.5; overflow-x:auto; text-align:left; white-space:pre-wrap; border:1px solid #333;'><code style='font-family:inherit;'>\`\`\`javascript<br>${withBreaks}<br>\`\`\`</code></div>`;
}

function parseSummaryLinkedList(content) {
    const questions = [];
    const lines = content.split('\n');

    let inLinkedListSection = false;
    let currentCategory = '';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('## 一、 链表')) {
            inLinkedListSection = true;
            continue;
        }

        if (inLinkedListSection && line.match(/^## [二三四五六七八九十]/)) {
            break;
        }

        if (!inLinkedListSection) continue;

        const categoryMatch = line.match(/^\*\*(.+)\*\*$/);
        if (categoryMatch) {
            currentCategory = categoryMatch[1];
            continue;
        }

        const questionMatch = line.match(/^- \[(.+?)\]\((.+?)\)\s*\((\w+)\)(?:\s*-\s*\*(.+?)\*)?/);
        if (questionMatch) {
            const title = questionMatch[1];
            const link = questionMatch[2];
            const difficulty = questionMatch[3];
            const tag = questionMatch[4] || '';

            let description = '';
            if (i + 1 < lines.length && lines[i + 1].trim().startsWith('>')) {
                description = lines[i + 1].trim().replace(/^>\s*/, '');
            }

            questions.push({ title, link, difficulty, tag, category: currentCategory, description });
        }

        const supplementMatch = line.match(/^- \[?(补充题\d*[.．]\s*.+?)\]?\s*\((.+?)\)\s*\((\w+)\)?/);
        if (supplementMatch && !questionMatch) {
            const title = supplementMatch[1];
            const link = supplementMatch[2];
            const difficulty = supplementMatch[3] || 'Medium';

            let description = '';
            if (i + 1 < lines.length && lines[i + 1].trim().startsWith('>')) {
                description = lines[i + 1].trim().replace(/^>\s*/, '');
            }

            questions.push({ title, link, difficulty, tag: '', category: currentCategory, description });
        }
    }

    return questions;
}

function parseLinkedListSolutions(content) {
    const solutions = {};
    const lines = content.split('\n');

    let currentQuestionNum = null;
    let currentCode = '';
    let inCodeBlock = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const titleMatch = line.match(/^#{3,5}\s*\[?(\d+)[.．\s]|\b(\d+)[.．]/);
        if (titleMatch) {
            const num = titleMatch[1] || titleMatch[2];
            if (num) {
                currentQuestionNum = num;
                if (!solutions[currentQuestionNum]) {
                    solutions[currentQuestionNum] = [];
                }
            }
        }

        if (line.trim().startsWith('```js') || line.trim().startsWith('```javascript')) {
            inCodeBlock = true;
            currentCode = '';
            continue;
        }

        if (line.trim() === '```' && inCodeBlock) {
            inCodeBlock = false;
            if (currentQuestionNum && currentCode.trim()) {
                solutions[currentQuestionNum].push(currentCode.trim());
            }
            currentCode = '';
            continue;
        }

        if (inCodeBlock) {
            currentCode += line + '\n';
        }
    }

    return solutions;
}

function generateAnkiCards(questions, solutions) {
    const cards = [];

    for (const q of questions) {
        const numMatch = q.title.match(/^(\d+)/);
        const questionNum = numMatch ? numMatch[1] : null;

        // 正面 - 题目卡片
        let front = `<div style='background:linear-gradient(135deg,#667eea 0%,#764ba2 100%); padding:20px; border-radius:12px; color:white;'>`;
        front += `<h2 style='margin:0 0 15px 0; font-size:20px;'>🔗 ${escapeForAnki(q.title)}</h2>`;

        const diffColor = q.difficulty === 'Easy' ? '#4CAF50' : q.difficulty === 'Medium' ? '#FF9800' : '#f44336';
        const diffBg = q.difficulty === 'Easy' ? '#E8F5E9' : q.difficulty === 'Medium' ? '#FFF3E0' : '#FFEBEE';
        front += `<p style='margin:10px 0;'><span style='background:${diffBg}; color:${diffColor}; padding:4px 12px; border-radius:12px; font-weight:bold; font-size:12px;'>${q.difficulty}</span>`;
        if (q.tag) front += ` <span style='background:rgba(255,255,255,0.2); padding:4px 12px; border-radius:12px; font-size:12px;'>${escapeForAnki(q.tag)}</span>`;
        if (q.category) front += ` <span style='background:rgba(255,255,255,0.2); padding:4px 12px; border-radius:12px; font-size:12px;'>${escapeForAnki(q.category)}</span>`;
        front += `</p>`;

        if (q.description) {
            front += `<div style='background:rgba(255,255,255,0.15); padding:15px; border-radius:8px; margin:15px 0; font-size:14px; line-height:1.6;'>${escapeForAnki(q.description)}</div>`;
        }
        front += `<p style='margin:15px 0 0 0;'><a href='${q.link}' style='color:#fff; text-decoration:underline;'>📎 LeetCode 链接</a></p>`;
        front += `</div>`;

        // 反面 - 答案
        let back = `<div style='padding:15px; background:#f5f5f5; border-radius:12px;'>`;
        back += `<h3 style='color:#333; margin:0 0 15px 0; border-bottom:2px solid #667eea; padding-bottom:10px;'>💡 解题代码</h3>`;

        if (questionNum && solutions[questionNum] && solutions[questionNum].length > 0) {
            const codes = solutions[questionNum];
            codes.forEach((code, idx) => {
                if (codes.length > 1) {
                    back += `<p style='color:#667eea; font-weight:bold; margin:15px 0 10px 0;'>📝 解法 ${idx + 1}</p>`;
                }
                back += formatCodeForAnki(code);
                if (idx < codes.length - 1) back += `<hr style='border:none; border-top:1px dashed #ccc; margin:20px 0;'>`;
            });
        } else {
            back += `<p style='color:#999; font-style:italic; text-align:center; padding:20px;'>暂无代码答案，请参考 LeetCode 官方题解</p>`;
        }
        back += `</div>`;

        cards.push({ front, back, title: q.title });
    }

    return cards;
}

function writeAnkiFile(cards, outputPath) {
    const lines = cards.map(card => {
        const front = card.front.replace(/[\r\n]+/g, ' ').replace(/\t/g, '    ');
        const back = card.back.replace(/[\r\n]+/g, ' ').replace(/\t/g, '    ');
        return `${front}\t${back}`;
    });

    fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');
}

// 主程序
try {
    console.log('📖 读取摘要文件...');
    const summaryContent = fs.readFileSync(summaryFile, 'utf8');

    console.log('📖 读取链表详解文件...');
    const linkedListContent = fs.readFileSync(linkedListFile, 'utf8');

    console.log('🔍 解析链表题目...');
    const questions = parseSummaryLinkedList(summaryContent);
    console.log(`   找到 ${questions.length} 道链表题目`);

    console.log('🔍 解析代码答案...');
    const solutions = parseLinkedListSolutions(linkedListContent);
    console.log(`   找到 ${Object.keys(solutions).length} 个题目的代码答案`);

    console.log('🎨 生成带语法高亮的 Anki 卡片...');
    const cards = generateAnkiCards(questions, solutions);

    console.log('💾 写入文件...');
    writeAnkiFile(cards, outputFile);

    console.log(`\n✅ 成功生成 ${cards.length} 张 Anki 卡片（带语法高亮）！`);
    console.log(`📁 输出文件: ${outputFile}`);
    console.log('\n📋 Anki 导入说明:');
    console.log('   1. 打开 Anki -> 文件 -> 导入');
    console.log('   2. 选择 anki_linkedlist.txt');
    console.log('   3. 类型: 基础');
    console.log('   4. 字段分隔符: Tab');
    console.log('   5. ✅ 务必勾选 "允许在字段中使用 HTML"');
    console.log('   6. 字段1 -> 正面, 字段2 -> 反面');

    console.log('\n📊 卡片详情:');
    let matchedCount = 0;
    for (const card of cards) {
        const hasAnswer = !card.back.includes('暂无代码答案');
        if (hasAnswer) matchedCount++;
        console.log(`   ${hasAnswer ? '✅' : '❌'} ${card.title}`);
    }
    console.log(`\n   匹配率: ${matchedCount}/${cards.length} (${Math.round(matchedCount / cards.length * 100)}%)`);

} catch (err) {
    console.error('❌ 错误:', err.message);
}
