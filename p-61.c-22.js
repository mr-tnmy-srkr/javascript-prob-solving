/* You have a JavaScript function called isValidPhotoName(photoName, imageExtensions).
This function accepts two parameters: photoName, which displays the name of an
image, and the imageExtensions Array, which contains image extensions such as
.jpg, .png, etc.

Your task is to complete the isValidPhotoName function to check whether the 
parameter photoName you provided is a valid photo name. This function's job 
is to return true if photoName is a valid photo name ending with any of the 
existing photo extensions; Otherwise, the function will return false. */

// ----------------------------------------------------------------------------------------

function isValidPhotoName(photoName, imageExtensions){
    if(typeof photoName !== "string" || !Array.isArray(imageExtensions)){
        return "please provide valid inputs"
    }else{
        for(let item of imageExtensions){
           if(photoName.toLowerCase().endsWith(item.toLowerCase())){
                return true;
           }
        }
        return false;
    }

}
const photo1 = "image.svg";
const photo2 = "image.png";
const extensions = [".jpg",".JPEG",".png",".gif",".ico"];
console.log(isValidPhotoName(photo1,extensions)); //false
console.log(isValidPhotoName(photo2,extensions)); ///true