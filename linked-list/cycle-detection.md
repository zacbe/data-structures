# Floyd's Cycle Detection Algorithm

![cycle detection](/img/cycle-detection.png)

## Find the starting point of a cycle

Distance travelled by `slowPointer` before meeting = `𝑥 + 𝑦`

Distance travelled by `fastPointer` before meeting =`(𝑥 + 𝑦 + 𝑧) + 𝑦 = 𝑥 + 2𝑦 + 𝑧`

Since `fastPointer` travels with double the speed of `slowPointer`, and time is constant for both when both pointers reach the meeting point. So by using simple speed, time and distance relation (`slowPointer` traveled half the distance):

```
2 ∗ dist(slowPointer) = dist(fastPointer)
2(𝑥 + 𝑦) = x + 2y + z
2x + 2y =  x + 2y + z
x = z
```

Hence by moving `slowPointer` to start of linked list, and making both `slowPointer` and `fastPointer` to move one node at a time, they both have same distance to cover.

They will reach at the point where the loop starts in the linked list.

### Read more

- [stack exchange](https://cs.stackexchange.com/a/45540/144532)
- [wiki](https://en.wikipedia.org/wiki/Cycle_detection)
