# Session

- A session is a way to store information(in variables) to be used across multiple pages.

# How session works

- `session_start()`: It creates/starts a seesion or resumes the current one based on a session identifier passed via a GET or POST request or passed via a cookie. This function first checks if a session is already started and if none is started then it starts one. When it fails to start a session, return `FALSE` and no longer initializes `$_SESSION`. Note: The `session_start()` fucntion must be the very first thing in your document before any HTML tags. Session variables are set with the PHP global variable `$_SESSION`. These variables can be accessed during lifetime of a session.

  ```php
  $_SESSION["uname"] = "chocho";
  $_SESSION["upass"] = "chocholate";
  $_SESSION["time"] = time();
  $_SESSION["cart"] = $number;
  ```

  - start a session if not available:-
    - Store a cookie on client machine: Cookie_name - `PHPSESSIONID`, Content - `SessionID`.
    - Store a file on server: Name - `SESS_SessionID`, Content - `<Session_Variable>`
  - session avaiable, resume it
    - It matches `PHPSESSIONID` Cookie's `SessionID` with the server's file.
    - If both match: All session variables are available and accessible

  ```php
  <?php
      // Set a session in php
      session_start();
  ?>
  ```

- Session variable are stored in the PHP global variable `$_SESSION`.

  ```php
  $_SESSION["uname"];
  ```

  ```php
  <?php
      // Start a session
      session_start();

      // Set session variables
      $_SESSION["uname"] = "chocho";
      $_SESSION["upass"] = "chocholate";

      // Access session variables
      echo $_SESSION["uname"];

      // Check if session variable set or not
      if(isset($_SESSION["uname"])) {
          echo "SET";
      } else {
          echo "NOT SET";
      }
  ?>
  ```

- `unset($_SESSION["varName"])`: This is used to free/unset/unregister a session variable.

  ```php
  unset($_SESSION["uname"]);
  ```

- `session_unset()`: his is used to free/unset/unregister all session variables currently registered. It returns True on success or False on failure.

- `session_destroy()`: It destroys all of the data associated with the current session. File on the server corresponding to a session is deleted. It does not unset any of the global variables associated with the session, or unset the session cookie. To use the session variables again, `session_start()` has to be called.
