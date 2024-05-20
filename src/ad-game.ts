#!/usr/bin/env

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

console.log(chalk.greenBright("***************WELCOME TO ADVENTURE GAME******************/n") );

let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: chalk.yellow("Please Enter your Name: "),
  },
]);

let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: chalk.yellow("Please select your opponent: "),
    choices: ["Alien", "Mask Man", "Captain"],
  },
]);

let p1 = new Player(player.name);
let o1 = new Player(opponent.select);

do {
  // Alien
  if (opponent.select == "Alien") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.yellow("What you want to do?"),
        choices: ["Attack", "Drink Portion", "Run for Life..."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.redBright("You Loose, Better luck next time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.yellowBright("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.green(`You drink health portion, Your fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run for Life...") {
      console.log(chalk.redBright("You Loose, Better luck next time"));
      process.exit();
    }
  }

  // Mask Man
  if (opponent.select == "Mask Man") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What you want to do?",
        choices: ["Attack", "Drink Portion", "Run for Life..."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.redBright("You Loose, Better luck next time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.yellowBright("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.green(`You drink health portion, Your fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run for Life...") {
      console.log("You Loose, Better luck next time");
      process.exit();
    }
  }

  // Captain
  if (opponent.select == "Captain") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What you want to do?",
        choices: ["Attack", "Drink Portion", "Run for Life..."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.redBright("You Loose, Better luck next time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.yellowBright("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(`You drink health portion, Your fuel is ${p1.fuel}`);
    }
    if (ask.opt == "Run for Life...") {
      console.log("You Loose, Better luck next time");
      process.exit();
    }
  }
} while (true);
