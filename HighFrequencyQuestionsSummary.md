# 高频面试题分类汇总 (总计 70+ 题)

## 一、 链表 (LinkedList) - *重中之重*

**基础操作**
- [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/) (Easy) - *必背*
- [92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/) (Medium) - *区间反转*
- [25. K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/) (Hard) - *面试常客*
- [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/) (Easy)
- [23. 合并K个排序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/) (Hard) - *堆/归并*
- [148. 排序链表](https://leetcode-cn.com/problems/sort-list/) (Medium) - *归并排序*
- [补充题1. 排序奇升偶降链表](https://leetcode-cn.com/problems/sort-list/) (Medium)

**双指针技巧**
- [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/) (Easy) - *判圈*
- [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/) (Medium) - *找入口*
- [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/) (Easy)
- [19. 删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/) (Medium)
- [剑指 Offer 22. 链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/) (Easy)

**综合/技巧**
- [143. 重排链表](https://leetcode-cn.com/problems/reorder-list/) (Medium) - *中点+反转+合并*
- [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/) (Medium)
- [146. LRU缓存机制](https://leetcode-cn.com/problems/lru-cache/) (Medium) - *双向链表+哈希*
- [82. 删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/) (Medium)

---

## 二、 二叉树 (Binary Tree) - *必考专题*

**遍历 (BFS/DFS)**
- [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/) (Medium) - *BFS模板*
- [103. 二叉树的锯齿形层次遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/) (Medium)
- [199. 二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view/) (Medium)
- [662. 二叉树最大宽度](https://leetcode-cn.com/problems/maximum-width-of-binary-tree/) (Medium)
- [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/) (Easy)

**路径与属性 (分治思维)**
- [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/) (Easy)
- [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) (Medium)
- [236. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/) (Medium) - *必考*
- [124. 二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/) (Hard)
- [112. 路径总和](https://leetcode-cn.com/problems/path-sum/) (Easy)
- [113. 路径总和 II](https://leetcode-cn.com/problems/path-sum-ii/) (Medium)
- [129. 求根到叶子节点数字之和](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/) (Medium)
- [剑指 Offer 26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/) (Medium)

**二叉搜索树 (BST)**
- [98. 验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/) (Medium)

---

## 三、 数组与双指针 (Array & Two Pointers)

**N数之和**
- [1. 两数之和](https://leetcode-cn.com/problems/two-sum/) (Easy) - *Hash*
- [15. 三数之和](https://leetcode-cn.com/problems/3sum/) (Medium) - *排序+双指针*

**滑动窗口**
- [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/) (Medium) - *模版题*
- [209. 长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/) (Medium)
- [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/) (Hard)
- [239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/) (Hard) - *单调队列*

**对撞双指针** *(左右向中间逼近)*
- [42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/) (Hard) - *必考，左右指针+维护最大高度*
- [88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/) (Easy) - *逆向双指针，从后往前填充*
- [11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/) (Medium) - *移动较短的一边*

**快慢指针** *(同向不同速)*
- [26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/) (Easy) - *slow记录有效位置*
- [27. 移除元素](https://leetcode-cn.com/problems/remove-element/) (Easy) - *原地删除*
- [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/) (Easy) - *非零前移，尾部填零*
- [287. 寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/) (Medium) - *Floyd判圈法*

**贪心策略**
- [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/) (Easy) - *维护历史最低价*
- [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/) (Medium) - *累加所有正收益*

**矩阵模拟 (边界控制)**
- [54. 螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/) (Medium) - *四边界收缩*
- [48. 旋转图像](https://leetcode-cn.com/problems/rotate-image/) (Medium) - *先转置后翻转 / 四角轮换*
- [31. 下一个排列](https://leetcode-cn.com/problems/next-permutation/) (Medium) - *规律模拟：找降序起点*

**区间处理 & 原地哈希**
- [56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/) (Medium) - *排序后贪心合并*
- [41. 缺失的第一个正数](https://leetcode-cn.com/problems/first-missing-positive/) (Hard) - *原地哈希：nums[i]放到i-1位置*

---

## 四、 动态规划 (DP)

> **DP四要素**：① 状态定义 → ② 转移方程 → ③ 初始化 → ④ 返回值

---

### 模板一：线性DP (单序列)

> **状态**：`dp[i]` = 以 `nums[i]` 结尾/到达位置 `i` 的最优解  
> **特点**：当前状态只依赖前面的状态

```javascript
// 通用模板
const dp = new Array(n).fill(初始值);
dp[0] = 边界值;
for (let i = 1; i < n; i++) {
    dp[i] = 状态转移(dp[i-1], dp[i-2], ...);  // 或遍历 j < i
}
return dp[n-1]; // 或 Math.max(...dp)
```

| 题目                                                                                    | 状态定义                    | 转移方程                                                   |
| --------------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------- |
| [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)                         | `dp[i]` = 到第i阶的方法数   | `dp[i] = dp[i-1] + dp[i-2]`                                |
| [53. 最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)                  | `dp[i]` = 以i结尾的最大和   | `dp[i] = max(dp[i-1] + nums[i], nums[i])`                  |
| [300. 最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/) | `dp[i]` = 以i结尾的LIS长度  | `dp[i] = max(dp[j] + 1)` 其中 `j < i && nums[j] < nums[i]` |
| [139. 单词拆分](https://leetcode-cn.com/problems/word-break/)                           | `dp[i]` = 前i个字符能否拆分 | `dp[i] = dp[j] && s[j:i] in dict`                          |

---

### 模板二：完全背包DP

> **状态**：`dp[i]` = 凑成金额/容量 `i` 的最优解  
> **特点**：物品可重复选取，外层遍历目标，内层遍历选择

```javascript
// 完全背包模板
const dp = new Array(amount + 1).fill(Infinity);
dp[0] = 0;
for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
        if (i >= coin) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
}
return dp[amount] > amount ? -1 : dp[amount];
```

| 题目                                                           | 状态定义                    | 转移方程                        |
| -------------------------------------------------------------- | --------------------------- | ------------------------------- |
| [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/) | `dp[i]` = 凑成i的最少硬币数 | `dp[i] = min(dp[i - coin] + 1)` |

---

### 模板三：双序列DP

> **状态**：`dp[i][j]` = `s1[0..i]` 与 `s2[0..j]` 的匹配结果  
> **特点**：两个序列对比，根据末尾字符是否相等分情况

```javascript
// 双序列DP模板
const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
// 初始化边界 dp[0][j] 和 dp[i][0]
for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
        if (s1[i-1] === s2[j-1]) {
            dp[i][j] = dp[i-1][j-1] + 1;  // 匹配
        } else {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);  // 不匹配
        }
    }
}
return dp[m][n];
```

| 题目                                                                                 | 状态定义                | 转移方程                                                    |
| ------------------------------------------------------------------------------------ | ----------------------- | ----------------------------------------------------------- |
| [1143. 最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/) | `dp[i][j]` = LCS长度    | 相等：`dp[i-1][j-1]+1`；不等：`max(dp[i-1][j], dp[i][j-1])` |
| [72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/)                      | `dp[i][j]` = 最少操作数 | 相等：`dp[i-1][j-1]`；不等：`min(三方向) + 1`               |

---

### 模板四：矩阵/区间DP

> **状态**：`dp[i][j]` = 从起点到 `(i,j)` / 区间 `[i,j]` 的最优解  
> **特点**：矩阵按层遍历，区间从小到大枚举长度

```javascript
// 矩阵DP模板 (路径问题)
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    }
}

// 区间DP模板 (回文/分割问题)
for (let len = 2; len <= n; len++) {       // 枚举区间长度
    for (let i = 0; i + len - 1 < n; i++) { // 枚举左端点
        let j = i + len - 1;                 // 右端点
        dp[i][j] = 根据 dp[i+1][j-1] 等子区间计算;
    }
}
```

| 题目                                                                               | 状态定义                               | 转移方程                                |
| ---------------------------------------------------------------------------------- | -------------------------------------- | --------------------------------------- |
| [64. 最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)               | `dp[i][j]` = 到(i,j)的最小和           | `dp[i][j] = min(上, 左) + grid[i][j]`   |
| [221. 最大正方形](https://leetcode-cn.com/problems/maximal-square/)                | `dp[i][j]` = 以(i,j)为右下角的最大边长 | `dp[i][j] = min(左,上,左上) + 1`        |
| [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/) | `dp[i][j]` = s[i..j]是否回文           | `dp[i][j] = s[i]==s[j] && dp[i+1][j-1]` |

---

## 五、 回溯算法 (Backtracking)

> **核心思想**：选择 → 递归 → 撤销（回溯）  
> **时间复杂度**：通常 O(N!) 或 O(2^N)，纯暴力穷举

### 回溯通用模板

```javascript
const result = [];

function backtrack(path, choices, start) {
    // 1. 满足结束条件，收集结果
    if (满足结束条件) {
        result.push([...path]);  // 注意拷贝
        return;
    }
    
    // 2. 遍历选择列表
    for (let i = start; i < choices.length; i++) {
        // 剪枝（可选）
        if (需要剪枝) continue;
        
        path.push(choices[i]);       // 做选择
        backtrack(path, choices, 下一个起点);  // 递归
        path.pop();                  // 撤销选择
    }
}
```

### 三种经典场景对比

| 场景     | 下一层起点                        | 是否需要visited | 去重方式                            |
| -------- | --------------------------------- | --------------- | ----------------------------------- |
| **子集** | `i + 1`                           | ❌               | 排序 + `nums[i] === nums[i-1]` 跳过 |
| **组合** | `i + 1` (不可重复) / `i` (可重复) | ❌               | 同上                                |
| **排列** | `0` (每次从头)                    | ✅ visited数组   | 排序 + `!visited[i-1]` 跳过         |

### 题目速查

| 题目                                                                     | 类型     | 关键技巧                                         |
| ------------------------------------------------------------------------ | -------- | ------------------------------------------------ |
| [46. 全排列](https://leetcode-cn.com/problems/permutations/)             | 排列     | `visited` 数组标记已用元素                       |
| [78. 子集](https://leetcode-cn.com/problems/subsets/)                    | 子集     | 每个节点都收集结果                               |
| [39. 组合总和](https://leetcode-cn.com/problems/combination-sum/)        | 组合     | 可重复选，下一层从 `i` 开始                      |
| [93. 复原IP地址](https://leetcode-cn.com/problems/restore-ip-addresses/) | 分割     | 每段 1-3 位，值 ≤ 255，无前导零                  |
| [22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)   | 决策树   | `left < n` 可加左括号，`right < left` 可加右括号 |
| [79. 单词搜索](https://leetcode-cn.com/problems/word-search/)            | 网格回溯 | 四方向 DFS + 原地标记访问                        |

---

## 六、 搜索 (DFS/BFS)

### 网格DFS模板 (岛屿问题)

```javascript
function dfs(grid, i, j) {
    // 边界检查 + 访问检查
    if (i < 0 || i >= m || j < 0 || j >= n) return 0;
    if (grid[i][j] !== '1') return 0;
    
    grid[i][j] = '0';  // 标记已访问（原地修改 / 或用visited数组）
    
    // 四方向递归
    return 1 + dfs(grid, i+1, j) + dfs(grid, i-1, j) 
             + dfs(grid, i, j+1) + dfs(grid, i, j-1);
}

// 主函数：遍历每个格子
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === '1') {
            count++;        // 岛屿数量
            dfs(grid, i, j);
        }
    }
}
```

### BFS模板 (层序遍历)

```javascript
function bfs(grid, startI, startJ) {
    const queue = [[startI, startJ]];
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    
    while (queue.length) {
        const [i, j] = queue.shift();
        for (const [di, dj] of dirs) {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] === '1') {
                grid[ni][nj] = '0';
                queue.push([ni, nj]);
            }
        }
    }
}
```

### 题目速查

| 题目                                                                            | 算法    | 关键技巧                         |
| ------------------------------------------------------------------------------- | ------- | -------------------------------- |
| [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)            | DFS/BFS | 遇到 `'1'` 启动搜索，沉没整个岛  |
| [695. 岛屿的最大面积](https://leetcode-cn.com/problems/max-area-of-island/)     | DFS     | 返回递归面积，取最大值           |
| [240. 搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/) | 双指针  | 从右上角开始，大了往左，小了往下 |

---

## 七、 二分查找 (Binary Search)

- [33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/) (Medium)
- [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/) (Easy)
- [162. 寻找峰值](https://leetcode-cn.com/problems/find-peak-element/) (Medium)
- [4. 寻找两个正序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/) (Hard)

---

## 八、 栈/字符串/数学/其他

**栈**
- [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/) (Easy)
- [32. 最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/) (Hard)
- [155. 最小栈](https://leetcode-cn.com/problems/min-stack/) (Easy)
- [232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/) (Easy)
- [394. 字符串解码](https://leetcode-cn.com/problems/decode-string/) (Medium)

**排序**
- [215. 数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/) (Medium) - *快速选择*
- [补充题4. 手撕快速排序](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

**字符串/数学**
- [415. 字符串相加](https://leetcode-cn.com/problems/add-strings/) (Easy)
- [43. 字符串相乘](https://leetcode-cn.com/problems/multiply-strings/) (Medium)
- [165. 比较版本号](https://leetcode-cn.com/problems/compare-version-numbers/) (Medium)
- [470. 用 Rand7() 实现 Rand10()](https://leetcode-cn.com/problems/implement-rand10-using-rand7/) (Medium)
- [440. 字典序的第K小数字](https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/) (Hard)
