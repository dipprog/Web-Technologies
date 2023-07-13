# Cookies

- A cookie is a small piece of text data set by web sever that resides on the client's browser / machine. Once it's been set, the client browser automatically returns the cookie to the web server with each request that it makes to that web server. This allows the sever to place value it wishes to **remember** in the cookie, and have access to them when creating a response.

- `Session Cookies`: Cookies that are set without the exprires field are called session cookies. It is destroyed when the user quits the browser.

- `Persistent Cookies`: The browser keeps it up until their expiration date is reached.

## Cookies in PHP

- PHP transparently supports HTTP cookies. Cookies are a mechanism for storing data in the remote browser and thus tracking or identifying retunn users. Cookies are part of the HTTP header.

- We can see cookies in Google chrome by following:
  ```
  chrome://settings/content/cookies
  ```

## Create cookies

- `setCookie()`: This PHP function is used to set/create/sent cookies. This function must appear before the <html> tag.

  ```php
  // Syntax
  setCookie(name, value, expire, path, domain, secure, httponly);

  // Example
  setCookie("uname", "chocho");
  ```

  - Where - `Name` => Name of the cookie, `Value`: This sets the value of the cookie. This value is stored on the client computer.
  - `name` and `value` are required parameters.

  - Optional Cookie attributes:

    - `expire`: It describes the time when cookie will be expire. If this parameter is `not set` or `set 0` then cookie will automatically expire when the Web browser is closed.

      ```php
      setCookie("uname", "chocho", time()+60*60*24*10); // 10 days
      ```

    - `Path`: It can be `/ (root)` or `/mydir (directory)`. If not specified, defaults to the current path of the current document location, as well as its descendants.

      ```php
      setCookie("uname", "chocho", "/");
      ```

    - `domain`: It specifies the domain for which the cookie is valid. If not specified, this defaults to the host portion of the current document location. If a domain is specified, subdomains are always included.

      ```php
      setCookie("uname", "chocho", "example.com");
      ```

    - `Secure`: Cookie to only be transmitted over secure protocol as `https`. When set to TRUE(1), the cookie will only be set if a secure connection exists.

      ```php
      setCookie("uname", "chocho", "example.com", "/", TRUE);
      ```

    - `httponly`: When TRUE( or 1), the cookie will be made accessible only through the HTTP protocol not by any client script.

      ```php
      setCookie("uname", "chocho", "example.com", "/", TRUE, TRUE);
      ```

  where we can omit optional cookie fields, the browser fills them automatically with reasonable defaults.

## Reading / Accessing Cookie

- We can read / access / retrieve cookies by using `$_COOKIE` super global variable.

  ```php
  $_COOKIE("uname");
  ```

## Replace / Append Cookies

- When we assign a new value to cookie, the current cookie are not replaced. The new value cookie is parsed and its name-value pair is appended to the list. The exception is when you assign a new cookie with same name (and same domain and path, if they exist) as a cookie that already exits. In that case, the old value is replaced with the new.

  ```php
  // Appended
  setCookie("uname", "chocho");
  setCookie("uid", 100001);

  // Replaced
  setCookie("uname", "chocho");
  setCookie("uname", "galib");
  ```

## Delete cookies

- A cookie can be deleted by setting a cookie with the same name ( and domain and path, if they are set) with an expiration date in the past.

  ```php
  // set cookie
  setCookie("uname", "chocho", time()+60*60*24*10);

  // Delete cookie
  setCookie("uname", "chocho", time()-3600 );
  ```
