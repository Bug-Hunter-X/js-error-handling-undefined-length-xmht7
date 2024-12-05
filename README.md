# JavaScript - Handling Undefined in Length Checks

This repository demonstrates a common JavaScript error: a TypeError thrown when trying to access the length property of an undefined variable.  The code example shows the error, and the solution provides a robust way to avoid it.

## The Problem

The `foo` function in `bug.js` attempts to find the length of the input `x`. However, it only explicitly checks for `null` and fails to handle the `undefined` case.  If `undefined` is passed, the code throws a `TypeError`.

## The Solution

The `bugSolution.js` file contains a corrected version of the function, explicitly checking for both `null` and `undefined`. This prevents the error and allows the function to handle different input types more gracefully.

## Running the Code

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (browser console, Node.js, etc.).
3. Run the code to observe the error and its solution.