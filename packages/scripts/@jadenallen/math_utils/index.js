export class Vector3{
    /** @type {number}*/x = 0;
    /** @type {number}*/y = 0;
    /** @type {number}*/z = 0;
    constructor(/** @type {number}*/x,/** @type {number}*/y,/** @type {number}*/z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
    *Adds 2 Vector3's together
    *@param pos1
    *The first Vector3
    *@param pos2
    *The second Vector3
    *@return
    *Returns a Vector3 with the inputs added together
    *
    * @example 
    *const pos1 = new Vector3(1, 1, 1);
    *const pos2 = new Vector3(0, 1, 0);
    *
    *let addedValue = Vector3.add(pos1, pos2); // Returns new Vector3(1, 2, 1)
    */
    static add(/** @type {Vector3}*/pos1, /** @type {Vector3}*/pos2){
        return new Vector3(pos1.x + pos2.x, pos1.y + pos2.y, pos1.z + pos2.z);
    }
    /**
    *Subtracts a Vector3 from another Vector3
    *@param pos1
    *The first Vector3
    *@param pos2
    *The second Vector3
    *@return
    *Returns a Vector3 with pos1's values subtracted by pos2's values
    *
    * @example 
    *const pos1 = new Vector3(1, 1, 1);
    *const pos2 = new Vector3(0, 1, 0);
    *
    *let subtractedValue = Vector3.subtract(pos1, pos2); // Returns new Vector3(1, 0, 1)
    */
    static subtract(/** @type {Vector3}*/pos1, /** @type {Vector3}*/pos2){
        return new Vector3(pos1.x - pos2.x, pos1.y - pos2.y, pos1.z - pos2.z);
    }
    /**
    *Divides a Vector3 by another Vector3
    *@param pos1
    *The first Vector3
    *@param pos2
    *The second Vector3
    *@return
    *Returns a Vector3 with pos1's values divided by pos2's values
    *
    * @example 
    *const pos1 = new Vector3(2, 2, 2);
    *const pos2 = new Vector3(4, 4, 4);
    *
    *let dividedValue = Vector3.divide(pos1, pos2); // Returns new Vector3(0.5, 0.5, 0.5)
    */
    static divide(/** @type {Vector3}*/pos1, /** @type {Vector3}*/pos2){
        return new Vector3(pos1.x / pos2.x, pos1.y / pos2.y, pos1.z / pos2.z);
    }
    /**
    *Multiplies a Vector3 with a number
    *@param pos1
    *The first Vector3
    *@param num
    *The Number
    *@return
    *Returns a Vector3 with pos1's values multiplied by the num
    *
    * @example 
    *const pos1 = new Vector3(1, 1, 1);
    *const multiplier = 5
    *
    *let multipliedValue = Vector3.times(pos1, multiplier); // Returns new Vector3(5, 5, 5)
    */
    static times(/** @type {Vector3}*/pos1, /** @type {Vector3}*/num){
        return new Vector3(pos1.x * num, pos1.y * num, pos1.z * num);
    }
    /**
    *Multiplies 2 Vector3's
    *@param pos1
    *The first Vector3
    *@param pos2
    *The second Vector3
    *@return
    *Returns a Vector3 with the inputs multiplied
    *
    * @example 
    *const pos1 = new Vector3(1, 1, 1);
    *const pos2 = new Vector3(0, 2, 0);
    *
    *let multipliedValue = Vector3.multiply(pos1, pos2); // Returns new Vector3(0, 2, 0)
    */
    static multiply(/** @type {Vector3}*/pos1, /** @type {Vector3}*/pos2){
        return new Vector3(pos1.x * pos2.x, pos1.y * pos2.y, pos1.z * pos2.z);
    }
    /**
    *Checks if 2 Vector3s are the same
    *@param pos1
    *The first Vector3
    *@param pos2
    *The second Vector3
    *@return
    *Returns true if the Vector3's are the same otherwise it will return false
    *
    * @example 
    *const pos1 = new Vector3(0, 0, 0);
    *const pos2 = new Vector3(0, 1, 0);
    *
    *let check = Vector3.Equals(pos1, pos2); // Returns false
    */
    static Equals(/** @type {Vector3}*/pos1, /** @type {Vector3}*/pos2){
        if (pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z){
            return true;
        }
        else{
            return false;
        }
    }

    /**
    *Returns a Vector3 at 0, 0, 0
    * @example 
    *let pos = Vector3.Zero(); // pos = new Vector3(0,0,0)
    */
    static Zero(){
        return new Vector3(0,0,0);
    }
    /**
    *Returns a Vector3 at 0, 1, 0
    * @example 
    *let pos = Vector3.Up(); // pos = new Vector3(0,1,0)
    */
    static Up(){
        return new Vector3(0,1,0);
    }
    /**
    *Returns a Vector3 at 0, -1, 0
    * @example 
    *let pos = Vector3.Down(); // pos = new Vector3(0,-1,0)
    */
    static Down(){
        return new Vector3(0,-1,0);
    }
    /**
    *Returns a Vector3 at 0, 0, 1
    * @example 
    *let pos = Vector3.Forward(); // pos = new Vector3(0,0,1)
    */
    static Forward(){
        return new Vector3(0,0,1);
    }
    /**
    *Returns a Vector3 at 0, 0, -1
    * @example 
    *let pos = Vector3.Back(); // pos = new Vector3(0,0,-1)
    */
    static Back(){
        return new Vector3(0,0,-1);
    }
    /**
    *Returns a Vector3 at -1, 0, 0
    * @example 
    *let pos = Vector3.Left(); // pos = new Vector3(-1,0,0)
    */
    static Left(){
        return new Vector3(-1,0,0);
    }
    /**
    *Returns a Vector3 at 1, 0, 0
    * @example 
    *let pos = Vector3.Right(); // pos = new Vector3(1,0,0)
    */
    static Right(){
        return new Vector3(1,0,0);
    }
    /**
    *Gets the distance between 2 Vector3's
    *@param Pos1
    *The first Vector3
    *@param Pos2
    *The second Vector3
    *@return
    *Returns the distance between the 2 Vectors
    *
    * @example 
    *const pos1 = new Vector3(0, 0, 0);
    *const pos2 = new Vector3(0, 1, 0);
    *   
    *let distance = Vector3.Distance(pos1, pos2); // Returns 1
    */
    static Distance(/** @type {Vector3}*/Pos1, /** @type {Vector3}*/Pos2){
        return (Math.abs(Pos1.x - Pos2.x) + 1) + (Math.abs(Pos1.y - Pos2.y) + 1) + (Math.abs(Pos1.z - Pos2.z) + 1);
    }
    /**
    *Linearly interpolates a Vector3 to a Vector3 by a Number
    *@param Pos1
    *The starting Vector3
    *@param Pos2
    *The Vector3 to linearly interpolate to
    *@param tParam
    *The Number at which the interpolation will be returning a value from (Should be from 0 to 1)
    *@return
    *Returns a Number between the first inputs based on the tParam value (if tParam is 0.5 that is half the distance from a to b)
    *
    * @example 
    *const startPos = new Vector3(0, 0, 0);
    *const endPos = new Vector3(0, 10, 0);
    *let newPos = Vector3.Lerp(newPos, endPos, 0.5) // Returns (0, 5, 0)
    */
    static Lerp(/** @type {Vector3}*/Pos1, /** @type {Vector3}*/Pos2, /** @type {number}*/tParam){
        let x = Pos1.x + (Pos2.x - Pos1.x) * tParam;
        let y = Pos1.y + (Pos2.y - Pos1.y) * tParam;
        let z = Pos1.z + (Pos2.z - Pos1.z) * tParam;

        return new Vector3(x, y, z);
    }
}
export class Vector3Int{
    /** @type {number}*/x = 0;
    /** @type {number}*/y = 0;
    /** @type {number}*/z = 0;

    constructor(/** @type {number}*/x,/** @type {number}*/y,/** @type {number}*/z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Distance(/** @type {Vector3}*/Pos1, /** @type {Vector3}*/Pos2){
        return (Math.abs(Pos1.x - Pos2.x) + 1) + (Math.abs(Pos1.y - Pos2.y) + 1) + (Math.abs(Pos1.z - Pos2.z) + 1);
    }
    Lerp(/** @type {Vector3}*/Pos1, /** @type {Vector3}*/Pos2, /** @type {number}*/tParam){
        let x = Pos1.x + (Pos2.x - Pos1.x) * tParam;
        let y = Pos1.y + (Pos2.y - Pos1.y) * tParam;
        let z = Pos1.z + (Pos2.z - Pos1.z) * tParam;

        return new Vector3(Math.round(x), Math.round(y), Math.round(z));
    }
}
export class Mathf{
    /**
    *Clamps a number between a minimum and maximum number
    *@param value
    *The value to clamp
    *@param min
    *The minimum value to clamp to
    *@param max
    *The maximum value to clamp to
    * @return 
    *Returns the number provided but not exceeding the min or max values
    *
    * @example 
    *let clampedVal = Mathf.Clamp(10, -10, 5) // Returns 5
    */
    static Clamp(/** @type {number}*/value, /** @type {number}*/min, /** @type {number}*/max){
        if (value >= min && value <= max) {return value};
        if (value >= max) { return max};
        if (value <= min) {return min};
    }
    /**
    *Linearly interpolates a Number to a Number by a Number
    *@param a
    *The starting Number
    *@param b
    *The Number to linearly interpolate to
    *@param tParam
    *The Number at which the interpolation will be returning a value from (Should be from 0 to 1)
    *@return
    *Returns a Number between the first inputs based on the tParam value
    *
    * @example 
    *const speed = 0;
    *let newSpeed = Mathf.Lerp(speed, 10, 0.5) // Returns 5
    */
    static Lerp(/** @type {number}*/a, /** @type {number}*/b, /** @type {number}*/tParam){
        return a + (b - a) * tParam;
    }
    /**
    *Gets the absolute of a value
    *@param value
    *The Number to use
    * @return 
    *Returns the positive version of a number (-1 would return 1 | 1 would return 1)
    *
    * @example 
    *const negativeVal = -10;
    *let positiveVal = Mathf.Abs(negativeVal);  // Returns 10
    */
    static Abs(/** @type {number}*/value){
        if (value < 0){ return value * -1}
        else return value;
    }
}
/**
    *A class used for generating random numbers.
*/
export class Random{
    /**
    *Generates a random number from a given range.
    *@param min
    *The minimum number that could be returned.
    *@param max
    *The maximum number that could be returned.
    * @return 
    *Returns a number between the min and max inputs.
    *
    * @example 
    *let randomVal = Random.Range(0, 10);
    */
    static Range(/** @type {number}*/min, /** @type {number}*/max){
        
        return Mathf.Lerp(min, max, Math.random());
    }
}
/**
*Generates an array of Vector3s with the first Vector being the minimum Vectors and the second Vector being the maximum Vectors
*@param pos1
*The first Vector3
*@param pos2
*The second Vector3
* @return 
*Returns an array of Vector3s with the first Vector being all the smallest numbers and the second Vector being the largest numbers
*
* @example 
*let minMax = GetMinMax(new Vector3(10, 20, 20), new Vector3(20, 10, 10))  // Returns [Vector3(10, 10, 10), Vector3(20, 20, 20)]
*/
export function GetMinMax(/** @type {Vector3}*/pos1, /** @type {Vector3}*/pos2){
    let minPos = new Vector3(0, 0, 0);
    let maxPos = new Vector3(0, 0, 0);

    if (pos1.x >= pos2.x){ maxPos.x = pos1.x; minPos.x = pos2.x}
    else { minPos.x = pos1.x; maxPos.x = pos2.x }

    if (pos1.y >= pos2.y){ maxPos.y = pos1.y; minPos.y = pos2.y}
    else { minPos.y = pos1.y; maxPos.y = pos2.y }

    if (pos1.z >= pos2.z){ maxPos.z = pos1.z; minPos.z = pos2.z}
    else { minPos.z = pos1.z; maxPos.z = pos2.z }

    let Vector3s = [
        minPos,
        maxPos
    ]
    return Vector3s;
}