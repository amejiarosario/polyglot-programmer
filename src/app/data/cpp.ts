export default {
  meta: {
    label: 'C++',
    syntax: 'cpp',
  },
  data: {
    'Maps (HashMap / Dictionary)': {
      orderedMap: `#include <bits/stdc++.h>

int main()
{
    // Ordered map
    std::map<int, int> order;

    // Mapping values to keys
    order[5] = 10;
    order[3] = 5;
    order[20] = 100;
    order[1] = 1;

    // Iterating the map and printing ordered values
    for (auto i = order.begin(); i != order.end(); i++) {
        std::cout << i->first << " : " << i->second << '\n';
    }

    /* Output (increasing order by default)
    1 : 1
    3 : 5
    5 : 10
    20 : 100
    */
}`,
      unorderedMap: `#include <bits/stdc++.h>

int main() {
    // Unordered map
    std::unordered_map<int, int> order;

    // Mapping values to keys
    order[5] = 10;
    order[3] = 5;
    order[20] = 100;
    order[1] = 1;

    // Iterating the map and printing unordered values
    for (auto i = order.begin(); i != order.end(); i++) {
        std::cout << i->first << " : " << i->second << '\n';
    }
    /* Output (Random order)
    1 : 1
    3 : 5
    20 : 100
    5 : 10
    */
}`
    }
  }
};
