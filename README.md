<p align="center">
  <a href="https://www.netlolo.com" target="_blank">
      <img src="https://app.netlolo.com/images/logo_vertical.png" alt="Netlolo"/>
  </a>
</p>

## Installing
* ```npm install```

## Running Application
* ```npm start```

## Running Unit Tests
* ```npm test```

## Search Offers
List results from offers, based on one or more specific quantity in the desired order (asc or desc).

* **URL Description**
/offer/:quantity/:sort?

*  **Parameters**

   **Required:**
 
   `quantity=[float]`

   **Optional:**

   `sort=[string]`

   * **Examples:**

  ```javascript
    $.ajax({
      url: "/offer/15000,30000/asc",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  http://localhost:3000/offer/15000,30000/asc
  
  ```javascript
    $.ajax({
      url: "/offer/53000/desc",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  http://localhost:3000/offer/53000/desc