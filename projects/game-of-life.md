# Conway's Game Of Life

## Definition

> The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

The automaton happens in a grid in which each cell can be dead or alive. At each step in time, the group of alive cells with be determined by the following rules:
- Alive cells survive with 2 or 3 alive neighbors.
- Dead cells become alive with 3 alive neighbors.

## Implementing

### The array approach

The idea of this approach is to store the state of every cell, like so:

```ts
const grid = [[0, 1, 0], [1, 1, 1], [0, 1, 0]];
```

Supposing a square grid, the number of items in the array will the square of the grid length:
- 10x10 grid = 100 items
- 100x100 grid = 10.000 items
- 300x300 grid = 90.000 items

That means that the the memory usage grows faster than the grid width.

### The visual problem

If all the cells live only inside the grid box, when an cell is much too close from the edge, it will be stuck in this edge. For instance, a glider on the edge becomes a block.

![glider transforms into block](/images/glider_to_block.gif)

#### The performance problem

To create a new generation you need to create a new array with the same size of the current one.

You can either:
- iterate over all items of the current array.
    - **advantage**: easy to do.
    - **disadvantage**: the bigger the grid, the slowest it will be.
- map where are the alive cells and them iterate over its neighbors.
    - **advatange**: only increases performance when there are few alive cells.
    - **disadvantage**: requires more steps.

### The Map approach

_comming soon..._
