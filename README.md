<style>
.light_green { color: rgb(100, 240, 100); }
.green { color: rgb(50, 150, 50); }
.red { color: rgb(246, 89, 89); }
.yellow { color: rgb(236, 255, 134); }
.blue { color: rgb(73, 148, 245); }
.orange { color: rgb(255, 119, 0); }
.light_purple { color: rgb(224, 67, 255); }
</style>


<div style="text-align:center;">
<span style="font-size:2em;">Math Utils</span>
<div>
The Math Utils Package contains many Vector Math functions and regular base functions. It offers a full Vector3 class that handles 3 dimensional coordinate systems.

<div style="font-size:2em;text-align:left">Vector3</div>
A class used for making vectors with 3 positions. X, Y and Z
<div style="white-space: pre-wrap;text-align:left"> 

    // World Space Vectors
    Vector3.Zero()                      // returns 0,0,0 
    Vector3.Up()                        // returns 0,1,0 
    Vector3.Down()                      // returns 0,-1,0 
    Vector3.Right()                     // returns 1,0,0 
    Vector3.Left()                      // returns -1,0,0 
    Vector3.Forward()                   // returns 0,0,1 
    Vector3.Back()                      // returns 0,0,-1 

    // Functions
    Vector3.add(pos1, pos2)             // returns a vector with pos1 + pos2
    Vector3.subtract(pos1, pos2)        // returns a vector with pos1 - pos2
    Vector3.divide(pos1, pos2)          // returns a vector with pos1 / pos2
    Vector3.times(pos1, value)          // returns a vector with pos1 and a number multiplied
    Vector3.multiply(pos1, pos2)        // returns a vector with pos1 and pos2 multiplied
    Vector3.Equals(pos1, pos2)          // returns true if both Vectors are the same
    Vector3.Distance(pos1, pos2)        // returns the distance between 2 points
    Vector3.Lerp(pos1, pos2, tParam)    // returns a Vector from pos1 to pos2 by tParam

</div>
<div style="font-size:2em;text-align:left">Mathf</div>
Functions for simple math operations.
<div style="white-space: pre-wrap;text-align:left;background-color: #2B2B2B; border-radius: 5px; padding: 20px"> 
<span class="green">Mathf.Clamp<span class="light_purple">()</span></span>
Mathf.Clamp(value, min, max)        // returns a clamped number within the min and max 
Mathf.Lerp(a, b, tParam)            // returns a Number from a to b by tParam
Mathf.Abs(value)                    // returns the positive version of a number

</div>

<div style="font-size:2em;text-align:left">Random</div>
Functions for making vector math simplified.
<div style="white-space: pre-wrap;text-align:left"> 

    Random.Range(min, max)              // returns a number between the min and max inputs

</div>
</div>
</div>

<details><summary><span style="font-size:1.5em;">Npm Packages</span> </summary>

###### Latest Version
    npm i @jadenallen/math_utils
###### Version 1.0.2
    npm i npm i @jadenallen/math_utils@1.0.2
###### Version 1.0.1
    npm i @jadenallen/math_utils@1.0.1
###### Version 1.0.0
    npm i @jadenallen/math_utils@1.0.0
</details>

<details><summary><span style="font-size:1.5em;">Copyright</span></summary>

```
MIT License

Copyright (c) 2024 Jaden-Allen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
</details>
