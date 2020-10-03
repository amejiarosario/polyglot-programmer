export default {
  meta: {
    label: 'Java',
    syntax: 'java',
  },
  data: {
    // https://beginnersbook.com/2013/12/treemap-in-java-with-example/
    'Maps (HashMap / Dictionary)': {
      orderedMap: `import java.util.TreeMap;
import java.util.Set;
import java.util.Iterator;
import java.util.Map;

public class HelloWorld{

    public static void main(String []args){
        // TreeMap is Red-Black tree based NavigableMap implementation. It is sorted according to the natural ordering of its keys.
        // Search, insert and delete: O(log n)
        TreeMap<Integer, Integer> map = new TreeMap<>();

        /*Adding elements to TreeMap*/
        map.put(5, 10);
        map.put(3, 5);
        map.put(20, 100);
        map.put(1, 1);

        /* Display content using Iterator*/
        Set set = map.entrySet();
        Iterator iterator = set.iterator();
        while(iterator.hasNext()) {
            Map.Entry mentry = (Map.Entry)iterator.next();
            System.out.println(mentry.getKey() + " : " + mentry.getValue());
        }
        /* Output (increasing order by default)
        1 : 1
        3 : 5
        5 : 10
        20 : 100
        */
    }
}`,
// https://beginnersbook.com/2013/12/hashmap-in-java-with-example/
// https://beginnersbook.com/2013/12/linkedhashmap-in-java/
      unorderedMap: `import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.Iterator;
import java.util.Map;

public class HelloWorld{

    public static void main(String []args){
        // HashMap. Order is not guarantee.
        // LinkedHashMap. Maintains insertion order.
        // Search, insert and delete: O(1) avg, O(n) worst
        HashMap<Integer, Integer> map = new HashMap<>();
        // LinkedHashMap<Integer, Integer> map = new LinkedHashMap<>();

        /*Adding elements*/
        map.put(5, 10);
        map.put(3, 5);
        map.put(20, 100);
        map.put(1, 1);

        /* Display content using Iterator*/
        Set set = map.entrySet();
        Iterator iterator = set.iterator();
        while (iterator.hasNext()) {
            Map.Entry mentry = (Map.Entry)iterator.next();
            System.out.println(mentry.getKey() + " : " + mentry.getValue());
        }
        /* Output (random order)
        1 : 1
        3 : 5
        20 : 100
        5 : 10
        */
    }
}`
    }
  }
};
