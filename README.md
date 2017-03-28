# Mastermind Clone

The build system is based off Stephen Grider's [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter) template with some updated packages.

### Getting Started

Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone https://github.com/RichardDorn/mastermind-clone.git
	> cd mastermind-clone
	> npm install
	> npm start
```
Navigate browser to localhost:8080

### How to Play

On load there is a random sequence of 4 colors generated behind the scenes. There is no maximum number of times a color can be used in the sequence. *Ex: peg1: black, peg2: green, peg3: green, peg4: white*

Select colors from the drop down list and hit submit to make a guess at the answer.

Left of your submitted guess there will be hints to help you solve the puzzle.
* A black dot means you have a correct color in the correct spot of the sequence
* A white dot means you have a correct color in the incorrect spot of the sequence
* No dot means incorrect color.

When you have 4 black dots you have solved the puzzle.

### Difficulty Level

* Easy - 6 colors to choose from
* Medium - 7 colors to choose from
* Hard - 8 colors to choose from
