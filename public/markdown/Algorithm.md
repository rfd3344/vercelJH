# **Resource**

- https://github.com/youngyangyang04/leetcode-master/blob/master/README.md#%E6%95%B0%E7%BB%84

## 复杂度

随 n 变化

i = 1; // time O(1), space O(1)

```js
while(i<n){ i = i \* 2; } // time O(logN) 二分法
for(i=1; i<=n; i++){ } // time O(n)
for(i=1; i<=n; i++){ for(j=1; j<=n; j++){ } } // time O(n2)
i = a[n]; // sapce O(n)

```

## Summary

- Hash
- DFS (Backtracking)
- BFS
- BinarySearch
- SliderWindow
- Greedy?
- DynanicProgramming
- Others

# **Hash (Dictionary)**

#### Q454 SomeArraySum

- https://leetcode.com/problems/4sum-ii
- Solution: https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0454.%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0II.md

# **DFS**

### DemoCode

```js
let counter = 0;
const solution = (arr) => {
  let res = [];
  const dfs = (current = []) => {
    // end conditions
    if (counter++ > 1_000_000) return; // prevent infinite recursion

    for (let i = 0; i < arr.length; i++) {
      // loop
      dfs(current);
    }
  };
  dfs();
  return res;
};

const test1 = [1, 2, 3];
const res = solution(test1);
console.warn('res', res);
```

#### Q77 Combinations

- https://leetcode.com/problems/combinations/
- https://leetcode.com/problems/combinations/solutions/3845903/ex-amazon-explains-a-solution-with-a-video-python-javascript-java-and-c/

#### Q131 分割回文串

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.md

### Tree structure Traverse - Q39，Q40, Q46, Q47, Q78, Q90

-

#### Example:

1. Q39，Q40: [2,3,6,7], target=7 -> sum [[2,2,3], [7] ]
2. Q46, Q47: [1,2] -> subset [[], [1], [2], [1,2]]
3. Q78, Q90: [1,2,3] -> sequence [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

- Q40: https://leetcode.com/problems/combination-sum-ii

### Island

#### Q200 Numbers Islands

- https://leetcode.com/problems/number-of-islands
- Approach:
- Solution: https://leetcode.com/problems/number-of-islands/solutions/5044114/beated-number-of-islands/

#### Q695 MaxArea Island

- https://leetcode.com/problems/max-area-of-island

# **BFS**

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0150.%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.md

#### Q127 WordLadder

- https://leetcode.com/problems/word-ladder/
- BFS

#### Q126 WordLadderII

- https://leetcode.com/problems/word-ladder-ii/
- BFS + DFS
- Solution: https://leetcode.com/problems/word-ladder-ii/solutions/388875/javascript-easy-to-understand-solution-using-bfs-dfs/

# **BinarySearch**

# **SliderWindow**

#### Q209 MinSubArraySum

- https://leetcode.com/problems/minimum-size-subarray-sum/description/

### Pointer

- Q15 ThreeSum
- https://leetcode.com/problems/3sum/

- Q18 FourSum
- https://leetcode.com/problems/4sum/

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

#### Q121 股票时机

-

# **Others**

#### Q3 Longest Substring Without Repeating Characters

- eg1: "abcabcbb" -> "abc"
- eg2: "pwwkew" -> "wke"

```js
let counter = 0;
const solution = function (arr) {
  let res = [];

  const recursing = (current = [], lastIndex = 0) => {
    if (counter++ > 1_000_000) return; // prevent infinite recursion
    //
  };

  recursing();
  return res;
};
```

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

#### Q59

- https://leetcode.com/problems/spiral-matrix-ii
- NoAlgorithm
