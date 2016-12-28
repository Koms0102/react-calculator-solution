# React Inventory

For this assignment, your task is to build a React inventory app that tracks best selling books. Start by forking and cloning this repository to your development environment. Then, using the provided [template files](template) plus a stateful `App` component class and a stateless `Book` component class, create a React inventory application that increments a book's stock.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/338/3BDEE9A8-7FAA-4C16-9AD7-68FE76085EC0-570-0000FA3EE3CDBEA4.gif)

And decrements a book's stock.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/339/F33301DF-0E15-4350-B11D-73E8BC91EACC-570-0000FA5D9DDB8939.gif)

Prevent a book's stock from going below 0 or above 999.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/351/1A714C39-FBAA-4BD7-B7AD-BC6E3E6B2A27-570-000172DA3305EC4D.gif)

## Bonus

Refactor the application so double clicking the stock must display a textfield instead of a label.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/346/BC217A03-633C-4316-AFC0-D0AA4E4F7FA9-570-00016F8A742CD6F8.gif)

Allow the textfield's value to only be an empty string `''` or a number between 0 and 999.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/360/CEA52BAE-160D-4BD2-A834-20E9B6FD7C31-570-00017657DF0DD040.gif)

When the textfield's value is a number, pressing the `Enter` key on either the textfield or its adjacent buttons must display a label instead.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/359/13C2F599-852B-4607-AAFC-F8F117F03C13-570-00017610361E09D6.gif)

When the textfield is visible, clicking on an adjacent `-` or `+` button must decrement or increment it's value.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/352/69E38F77-DFF9-4D3B-8E45-96049A0F9A07-570-000173A219CE59B2.gif)

When the textfield is visible, prevent a book's stock from going below 0 or above 999 while clicking on an adjacent `-` or `+` button.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/356/88B024E5-5461-48A1-A202-DBA0256374E3-570-000174582B228449.gif)

When the textfield is visible, prevent the label from being displayed if its value is an empty string `''` and another book's stock is double clicked or buttons are clicked.

![](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/357/AF77A001-D62B-45EC-8DE6-2E82AF17C320-570-00017555A6D18418.gif)

## Bonus

Using your preferred ESLint rules, lint your project with the `npm run lint .` command.

## Bonus

Once you're satisfied, find a classmate and see if that person would like some help.

## Solution

The [solution](https://github.com/gSchool/wd-react-inventory-solution) is available to instructors as well as students who've completed this assignment.
