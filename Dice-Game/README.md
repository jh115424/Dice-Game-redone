# React + Vite

I built this dice roller game to practice React components and state management while making something actually fun to use. Layout 3 caught my eye because it looks like a real game board instead of just a basic app.
What it does:

Roll 4 dice at once with one button click
Shows you the total of all dice
Tracks how many times you've rolled in the session
Each die displays 1-6 with actual dot patterns

The tech breakdown:

React with useState hooks to manage the dice values and roll counter
Component structure: DiceGame (main) and Die (reusable component for each individual die)
Props to pass dice values from parent to child components
JavaScript Math.random() to generate the dice rolls
CSS gradients and shadows to make 2D dice look dimensional
Flexbox/Grid for layout positioning

How I built it:
I started by creating the DiceGame component with all the layout structure - header, dice grid, score display, and roll button. Then I built a separate Die component that takes a number (1-6) as a prop and displays the corresponding dot pattern. The main component manages all the state and passes individual dice values down to each Die component.
The challenge was making the dice look good without using actual 3D - I used CSS shadows, gradients, and border-radius to give them depth. Way simpler than Three.js but still looks solid.
It's a straightforward project but covers important React concepts like component communication, state updates, and creating reusable components. Plus it's way more satisfying to click than a calculator button."