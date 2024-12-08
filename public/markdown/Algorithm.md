# **Resource**

## 复杂度

随 n 变化

i = 1; // time O(1), space O(1)

```js
while(i<n){ i = i \* 2; } // time O(logN) 二分法
for(i=1; i<=n; i++){ } // time O(n)
for(i=1; i<=n; i++){ for(j=1; j<=n; j++){ } } // time O(n2)
i = a[n]; // sapce O(n)

```

# Summary

- HashMap
- BinarySearch
- TwoPointer
- DFS (Backtracking)
- BFS
- Greedy?
- DynanicProgramming
- Others

# **HashMap**

- Q1_TwoSum: https://leetcode.com/problems/two-sum/
- Q454_SomeArraySum：https://leetcode.com/problems/4sum-ii/
- Q350_IntersectionTwoArrays: https://leetcode.com/problems/intersection-of-two-arrays-ii/

# **BinarySearch**

- Q704_BinarySearch: https://leetcode.com/problems/binary-search/

```js
const binarySearch = (nums = [], target = 0) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target ==== nums[mid]) return mid;
    else if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};
```

- Q35_SearchInsertPosition: https://leetcode.com/problems/search-insert-position/
- Q33_SearchRotatedSortedArray: https://leetcode.com/problems/search-in-rotated-sorted-array/
- Q2337_MovePiecesObtainString: https://leetcode.com/problems/move-pieces-to-obtain-a-string/

# **TwoPointer**

- Q3_LongestSubstring: https://leetcode.com/problems/longest-substring-without-repeating-characters
- Q11_ContainerWater: https://leetcode.com/problems/container-with-most-water/
- Q167_TwoSumSorted: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
- Q15_ThreeSum: https://leetcode.com/problems/3sum/
- Q18_FourSum: https://leetcode.com/problems/4sum/

- Q209_MinSubArraySum: https://leetcode.com/problems/minimum-size-subarray-sum/

- Q905_SortParity: https://leetcode.com/problems/sort-array-by-parity/

# **DFS**

- Q77_Combinations: https://leetcode.com/problems/combinations/

```js
var combine = function (n, k) {
  let res = [];

  const dfs = (arr, start, depth) => {
    if (arr.length === k) return res.push(arr);

    for (let i = start; i < n; i++) {
      dfs([...arr, i + 1], i + 1, depth + 1);
    }
  };

  dfs([], 0, 0);
  return res;
};
```

- Q131_StringPartition: https://leetcode.com/problems/palindrome-partitioning/

- Q39_CombinationSum: https://leetcode.com/problems/combination-sum/
- Q40_CombinationSum: https://leetcode.com/problems/combination-sum-ii/
- Q39，Q40: [2,3,6,7], target=7 => sum [[2,2,3], [7] ]

- Q46_Permutations: https://leetcode.com/problems/permutations/
- Q47_Permutations: https://leetcode.com/problems/permutations-ii/
- Q46, Q47: [1,2] => subset [[], [1], [2], [1,2]]

- Q78_Permutations: https://leetcode.com/problems/subsets/
- Q90_Permutations: https://leetcode.com/problems/subsets-ii/
- Q78, Q90: [1,2,3] => sequence [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

- Q22_GenerateParentheses: https://leetcode.com/problems/generate-parentheses/

```js
var generateParenthesis = function (n) {
  const res = [];

  const dfs = (prefix, left, right) => {
    if (left === 0 && right === 0) return res.push(prefix);

    if (left > 0) dfs(`${prefix}(`, left - 1, right);
    if (left < right) dfs(`${prefix})`, left, right - 1);
  };

  dfs('', n, n);
  return res;
};
```

- Island
- Q200_NumbersIslands: https://leetcode.com/problems/number-of-islands/
- Q695_MaxAreaIsland: https://leetcode.com/problems/max-area-of-island/

# **BFS**

- Q102_BinaryTree: https://leetcode.com/problems/binary-tree-level-order-traversal/

```js
var binaryTree = function (root) {
  if (!root) return [];

  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(temp);
  }

  return res;
};
```

- Q752_OpenLock: https://leetcode.com/problems/open-the-lock/
- Q127_WordLadder: https://leetcode.com/problems/word-ladder/

- Q126_WordLadderII: https://leetcode.com/problems/word-ladder-ii/
- BFS + DFS
- Solution: https://leetcode.com/problems/word-ladder-ii/solutions/388875/javascript-easy-to-understand-solution-using-bfs-dfs/

# **Greedy**

# **Dynamic programming**

#### Q509 斐波那契数

- Description: F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
- Approach: dp(n) = dp(n-1) + dp(i-2)

#### Q279 PerfectSquare

- Description: F(12) = 4 + 4 + 4; F(13) = 4 + 9;
- Approach: dp(n) = MIN(dp(n), dp(i-j^2) + 1)
- Solution: https://leetcode.com/problems/perfect-squares/solutions/4694883/beats-99-users-c-java-python-javascript-explained/
-

### 背包 01

- https://www.hello-algo.com/chapter_dynamic_programming/knapsack_problem/#__tabbed_4_13

#### SampleQuestion

- sum equal to target
- arr = [1, 3, 4, 5, 9] target = 10
- Result: [[1, 4, 5], [1, 4, 5], [1 ,9]]

#### 474. 一和零

- https://leetcode.cn/problems/ones-and-zeroes/description/

#### Q494 目标和

- Connect array values with only +/- sign to reach target
- eg: arr = [1, 1, 1] target = 1 -> 3 Result (+1+1-1, +1-1+1, -1+1+1)

# **Others**

#### Q121

```js
const solution = function (arr) {
  let minValue = arr[0];
  let diff = 0;

  for (let i = 0; i < arr.length; i++) {
    minValue = Math.min(minValue, arr[i]);
    diff = Math.max(diff, arr[i] - minValue);
  }
  return diff;
};

const res = solution([2, 1, 5, 6, 2, 3]);
console.warn('res', res);
```

- Q59_matrix: https://leetcode.com/problems/spiral-matrix-ii
