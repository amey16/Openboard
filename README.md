# RealTime White-Board
1. Created a realtime whiteboard built using Vanilla JavaScript, HTML and CSS
2. Used Socket.io and Node events to reflect back realtime changes to multiple users 
3. Created Undo-Redo features for the board using Arrays as a stack by storing  Positions, Colours and width of the Pen and Eraser

# Demo

https://user-images.githubusercontent.com/51751926/126301870-79baa375-8084-4632-88a2-bf5786160a09.mp4

# Features
- Pencil - Draw ,can change size and three colors available
- Eraser - erase function for canvas
- sticky - add a sticky pad in which notes can be written /minimize and delete
- upload - upload image 
- download - download the contents of the canvas as png file
- Redo/undo - added redo undo features
- Zoom in-out - attempted to add zoom in and zoom out features

# How to run
- You can test openboard by clicking [here](https://open-board16.herokuapp.com/)
- To run it in your local system follow the steps below 
    - ```git clone https://github.com/amey16/Openboard.git```
    - change the socket connection go to public/js/tool.js and add your local server link
    - you are ready to test it out now 😄

# Tools used
- Canvas API
- Socket.io 
- Vanilla JS
- Express JS
- DOM(Document object model)
