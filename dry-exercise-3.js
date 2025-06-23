/*
 - This program validates our product properties before importing it into our DB
 - What happens if we add more properties to our product that needs validation?? The current implementation will not scale 😱
 - Refactor the code to follow the DRY Principle. Let's GO!
*/

class CsvValidation {
  constructor(product) {
    this.product = product;
  }
  requiredProperties = [
    "color",
    "size", 
    "style",
  ];
  validateProduct(product) {
    for (const property of this.requiredProperties) {
      if (!product[property]) {
        throw new Error(`Product is missing required property: ${property}`);
      }
    }
    console.log("VALID: PASSED");
  }
};

const shirt = {
  color: "blue",
  size: "LG",
  style: "polo"
};

const product = new CsvValidation();
product.validateProduct(shirt);