# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by improper use of the `useEffect` hook.

The `bug.js` file contains the erroneous code.  The `useEffect` hook attempts to update the `count` state on every render without specifying any dependencies, resulting in an infinite render cycle. 

The `bugSolution.js` file provides the corrected code with dependency array. 

This example highlights the importance of understanding how the `useEffect` hook's dependency array functions.