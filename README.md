# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### References

This Calculator App built using [YouTube Videos](https://www.youtube.com/watch?v=hpfDRnijdPE, https://www.youtube.com/watch?v=n_cKSILMzmM).


Colors used from color picker using an image [https://imagecolorpicker.com/].


# `Project Starts from here`




```css
body{
  display: flex;
  justify-content: center;
  align-items: center;
}
```
![cal1](https://user-images.githubusercontent.com/54939657/127561779-40784f6e-ae9e-499c-a145-7b49b97e9213.JPG)
```css
/*______________________________________________________________________________

  This defines properties for the entire division container
  _______________________________________________________________________________*/

.App {
  background-color: black;
  top: 40%;
  left: 40%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 356px;
  text-align: center;
  margin: 0 auto;
  border: 10px solid #393f43;
  border-radius: 15px;
}
```
![cal2_app](https://user-images.githubusercontent.com/54939657/127561784-62e32412-e3bf-4e55-9112-f796ca957752.JPG)

```css
/*______________________________________________________________________________

  This defines the division for buttons
  Used grid
  Grid template columns are 4 for each row
  _______________________________________________________________________________*/
.buttons{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(70px, auto); 
}

```
![cal3_buttons](https://user-images.githubusercontent.com/54939657/127561786-75d5a2e3-1bef-4312-91a5-08f45e5d2a9b.JPG)

```css
/*______________________________________________________________________________

  This defines the input text filed and properties
  _______________________________________________________________________________*/
input[type="text"]{
  height: 80px;
  width: 349px;
  background-color:#bfc5c8 ;
  margin: 0 auto;
  border: 0px;
  border-radius: 5px;
  font-size: 28px;
  text-align: right;
  font-weight: 600;
  color:#393f43;
  letter-spacing: 1px;
}

```
![cal4_input](https://user-images.githubusercontent.com/54939657/127561787-a715507c-6319-4648-a3da-91398e8d42a9.JPG)

```css
/*______________________________________________________________________________

  This defines the properties for all the buttons
  _______________________________________________________________________________*/
  button{
    margin: 5px;
    border-radius: 10px;
    font-size: 20px;
    background-color: #1a1c1d;
    background-image: linear-gradient(#404448,#1e2123);
    color: #d8e7f1;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }

```
![cal5_button](https://user-images.githubusercontent.com/54939657/127561792-14f9cb27-208d-40d8-a0aa-180b654da15b.JPG)

```css
/*______________________________________________________________________________

  This defines the cancel button i.e "Clear"
  Used grid column for equalizing the equal button to two-colomns
  Clear button is at the first row i.e 1st row
  Used the gradient colors for background
  _______________________________________________________________________________*/
#cancel{
  grid-column: 1/3;
  grid-row: 1;
  background-image: linear-gradient(#86989a,#706b63);
}
```
![cal6_cancel](https://user-images.githubusercontent.com/54939657/127561803-6600fe89-2df7-456e-aa22-c9a42853deda.JPG)

```css
/*______________________________________________________________________________

  This defines the result button i.e "="
  Used grid column for equalizing the equal button to two-colomns
  Equal button is at the last row i.e 5th row
  Used the gradient colors for background
  _______________________________________________________________________________*/
#results{
  grid-column: 3/5;
  grid-row: 5;
  color: #dfedf7;
  background-image: linear-gradient(#c98a40,#995b2c, #774827);
}


```
![cal7_results](https://user-images.githubusercontent.com/54939657/127561812-e4735876-8538-4fb7-903a-61730d961a51.JPG)

```css

 /*______________________________________________________________________________

  This defines the color for all the operator buttons
  Addition, Divide, Multiplication, Substration, and dot
  Used the gradient background color
  _______________________________________________________________________________*/
#operator{
  background-image: linear-gradient(#4d5e6d,#3b4d66);
  color: white;
  font-weight: 900;
}

```
![cal8_operator](https://user-images.githubusercontent.com/54939657/127561819-8bd874fd-e1e5-4d54-a1d0-9ef7269c977d.JPG)

```css
/*______________________________________________________________________________

  This defines the color for the Button "C"
  Used the gradient background color
  _______________________________________________________________________________*/
#backspace{
  background-image: linear-gradient(#4d5e6d,#ccd0d2);
}
```
![cal9_backspace](https://user-images.githubusercontent.com/54939657/127561820-cdacaaa0-6f4b-489b-8da7-1e27fa869ecd.JPG)


## After adding all the above css code
# The Final Calculator App is looks like this
![finalCalculator](https://user-images.githubusercontent.com/54939657/127561821-728aada1-fa5d-4aa1-a13e-d040edafb89e.JPG)

