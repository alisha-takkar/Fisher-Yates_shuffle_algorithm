# Fisher-Yates_shuffle_algorithm

The Fisher-Yates shuffle is a randomization algorithm for shuffling the elements of an array. 
It is named after Ronald Fisher and Frank Yates, who first described it in their book 
"Statistical Tables for Biological, Agricultural and Medical Research" in 1938.

The algorithm works by starting at the last element in the array and swapping it with a
randomly selected element from the array. It then moves to the second to last element and 
repeats the process, continuing until it reaches the first element. 
This results in a fully shuffled array.

One important property of the Fisher-Yates shuffle is that it is unbiased, 
meaning that every permutation of the array is equally likely. 
This makes it a useful algorithm for generating random samples from a given array.

It should be noted that the Fisher-Yates shuffle has a time complexity of O(n), 
making it an efficient algorithm for shuffling large arrays. 
However, it does have a space complexity of O(1), so it is not suitable for 
shuffling very large arrays that cannot fit into memory.

Overall, the Fisher-Yates shuffle is a simple and effective algorithm for randomly shuffling the elements of an array.
