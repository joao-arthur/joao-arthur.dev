# Conway's Game Of Life

## Definition

> The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970

The automaton happens in a grid which each cell can be dead or alive. At each step in time, the group of alive cells is determined by the following rules:
- Alive cells survive with 2 or 3 alive neighbors.
- Dead cells become alive with 3 alive neighbors.

## Implementing

### The array approach

The idea of this approach is to store the state of **every** cell.

```ts
const grid = [[0, 1, 0], [1, 1, 1], [0, 1, 0]];
```

Supposing a square grid, the **number** of items in the array will be the **square** of the grid **length**:
- 10x10 grid = 100 items
- 100x100 grid = 10.000 items
- 300x300 grid = 90.000 items

That means that the the memory usage grows faster than the grid width.

#### The visual problem

If all the cells live **only inside** the grid box, they **stuck** at edges. For instance, a glider on the edge **becomes a block**.

![glider transforms into block](/images/glider_to_block.gif)

#### The performance problem

To create a new generation you need to create a new array with the same size of the current one.

You can either:
- iterate over all items of the current array.
    - **advantage**: easy to do.
    - **disadvantage**: the bigger the grid, the slowest it will be.
- map where are the alive cells and them iterate over its neighbors.
    - **advatange**: only increases performance when there are few alive cells.
    - **disadvantage**: more complex to implement.

### The Map approach

The idea of this approach is to store **only the alive** cells.

```ts
const grid = new Map([
    ['(0, 1)', 1],
    ['(-4, 2)', 1],
    ['(7, -3)', 1]]
);
```

> using a "Set" would also cut the mustard **in this scenario**, since a alive cell has only one state

One important aspect is that, with a Map, we can no longer count on an array index, we must use another way to identify the cell position, i.e., a **coordinate system**, like the **cartesian plane**.

#### The visual solution

Given that the coordinate system is **infinite**, the UI is works like a **spyglass**: showing only a small portion of the landscape, with the hability of moving around and zooming in and out.
There's no longer a limitation on the edges:

![glider slipping away](/images/glider_away.gif)

#### The performance solution

To create a new generation you need to create a new Map, iterating over the alive cells and their neighbordhoods, which is a operation independent from the UI size, therefore **much faster**.

## Final application
