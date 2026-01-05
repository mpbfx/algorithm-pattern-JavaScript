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

**基础双指针 (Two Pointers Basics)**
- [167. 两数之和 II](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/) (Easy) - *左右指针*
- [15. 三数之和](https://leetcode-cn.com/problems/3sum/) (Medium) - *排序+双指针*
- [42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/) (Hard) - *必考*

**滑动窗口 (Sliding Window)**
- [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/) (Medium) - *模版题*
- [209. 长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/) (Medium)
- [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/) (Hard)
- [239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/) (Hard) - *单调队列*

**贪心策略 (Greedy Strategy)**
- [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/) (Easy)
- [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/) (Easy)

**逆向与排列双指针 (Reverse & Permutation)**
- [88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/) (Easy) - *逆向指针*
- [31. 下一个排列](https://leetcode-cn.com/problems/next-permutation/) (Medium) - *找逆序对+反转*

**二维矩阵模拟 (Matrix Simulation)**
- [54. 螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/) (Medium)
- [48. 旋转图像](https://leetcode-cn.com/problems/rotate-image/) (Medium)

**区间与原地哈希 (Intervals & Cyclic Sort)**
- [56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/) (Medium)
- [41. 缺失的第一个正数](https://leetcode-cn.com/problems/first-missing-positive/) (Hard) - *原地Hash*

---

## 四、 动态规划 (DP)

**基础 DP**
- [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/) (Easy)
- [53. 最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/) (Medium)
- [300. 最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/) (Medium)
- [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/) (Medium) - *完全背包*
- [139. 单词拆分](https://leetcode-cn.com/problems/word-break/) (Medium)

**二维/字符串 DP**
- [1143. 最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/) (Medium)
- [72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/) (Hard)
- [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/) (Medium)
- [64. 最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/) (Medium)
- [221. 最大正方形](https://leetcode-cn.com/problems/maximal-square/) (Medium)

---

## 五、 回溯算法 (Backtracking)

- [46. 全排列](https://leetcode-cn.com/problems/permutations/) (Medium) - *基础*
- [78. 子集](https://leetcode-cn.com/problems/subsets/) (Medium)
- [39. 组合总和](https://leetcode-cn.com/problems/combination-sum/) (Medium)
- [93. 复原IP地址](https://leetcode-cn.com/problems/restore-ip-addresses/) (Medium)
- [22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/) (Medium)
- [79. 单词搜索](https://leetcode-cn.com/problems/word-search/) (Medium) - *网格回溯*

---

## 六、 搜索 (DFS/BFS)

- [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/) (Medium) - *必考*
- [695. 岛屿的最大面积](https://leetcode-cn.com/problems/max-area-of-island/) (Medium)
- [240. 搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/) (Medium)

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
