# Filters

- `PHP filters` are used to validate and sanitize external input. This is espicially useful when the data source contains unknown data like user input. For example, data from an `HTML from`, `cookies`, `sql statement result`, etc. PHP filters makes it easier to validate instead of using complicated regular expression. There are two main types of filtering:

  - `Validation`: Validation is used to validate or check if the data meets certain qualifications. For example, passing in `FILTER_VALIDATE_EMAIL` will determine if the data is a valid email address, but will not change the data itself.

  - `Sanitization`: Sanitization will sanitize the data, so it may alter it by removing undesired characters. For example, passing in `FILTER_SANITIZE_EMAIL` will remove characters that are inappropriate for an email address to contain. That said, it does not validate the data.

  - `filter_has_var()`: This function checks if a variable of a specified input type exist. It returns True on success or False on failure.

    ```php
    // Syntax
    filter_has_var(type, variable);
    ```

    - where `type` can be onf of `INPUT_GET`, `INPUT_POST`, `INPUT_COOKIE`, `INPUT_SERVER` or `INPUT_ENV`. `variable` is the name of the variable to check.

    ```php
    // Example
    filter_has_var(INPUT_POST, "email");
    ```

  - `filter_var()`: This function is used to validate and sanitize data. This function filters a single variable with a specified filter.

    ```php
    // Syntax
    filter_var(variable, filter, options);
    ```

    - Where `Variable`: Value to filter and `Filter`: The ID of the filter to apply and `Options`: It specifies one or more flags/options to use.

    ```php
    // Example1 - validate
    filter_var("contact@abc.com", FILTER_VALIDATE_EMAIL);

    // Example2 - validate
    filter_var($email, FILTER_VALIDATE_EMAIL);

    // Example3 - Sanitize
    filter_var($email, FILTER_SANITIZE_EMAIL);

    // Example4 - user defined validation
    filter_var($email, FILTER_CALLBACK, array("options" => "strtoupper"));
    ```

  - Filters for validation

    - `FILTER_VALIDATE_BOOLEAN`: It validates Boolean
    - `FILTER_VALIDATE_DOMAIN`: It validates whether the domain name label lengths are valid.
    - `FILTER_VALIDATE_EMAIL`: It validates whether the value is a valid email address.
    - `FILTER_VALIDATE_FLOAT`: It validates value as float, and converts to float on success.
    - `FILTER_VALIDATE_INT`: It validates value as int, and converts to int on success.
    - `FILTER_VALIDATE_IP`: It validates value as IP address.
    - `FILTER_VALIDATE_MAC`: It validates value as MAC address.
    - `FILTER_VALIDATE_REGEXP`: It validates value against regexp, a Perl-compatible regular expression.
    - `FILTER_VALIDATE_URL`: It validates a URL.

  - Filter for Sanitization

    - `FILTER_SANITIZE_EMAIL`: It removes all characters except letters, digits and **!#$%&'\*+-=?^\_`{|}~@.[]**
    - `FILTER_SANITIZE_NUMBER_FLOAT`: It removes all characters except digits, **+-** and optionally **.,eE**
    - `FILTER_SANITIZE_NUMBER_INT`: It removes all characters except digits, plus and minus sign
    - `FILTER_SANITIZE_URL`: It removes all characters except letters, digits and **$-\_.+!\*'(),{}|\\^~[]`<>#%";/?:@&=**
    - `FILTER_SANITIZE_ENCODED`: It removes/encodes special characters
    - `FILTER_SANITIZE_MAGIC_QUOTES`: It apply addslashes()
    - `FILTER_SANITIZE_SPECIAL_CHARS`: It removes special characters.
    - `FILTER_SANITIZE_FULL_SPECIAL_CHARS`: It is equivalents to calling `htmlspecialchars()` with ENT_QUOTES set.
    - `FILTER_SANITIZE_STRING`: It removes tags/special characters from a string.
    - `FILTER_SANITIZE_STRIPPED`: It is alias of `FILTER_SANITIZE_STRING`
    - `FILTER_UNSAFE_RAW`: Do nothing, optionally strip/encode special characters.

    ```php
    // Validation
    $email = "contact@abc.com";
    $vali_email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if($vali_email == FALSE) {
      echo "Invalid Email <br>";
    } else {
      echo "Email is vaild: " . $vali_email . "<br>";
    }
    ```

    - First do sanitization and then do validation.

  - Other filter:

    - `FILTER_CALLBACK`: This is used to call user-defined function to filter data.

    ```php
    // Build-in function
    filter_var($email, FILTER_CALLBACK, array("options" => "strtoupper"));

    // User defined function
    function covertwtoM($info) {
      return str_replace("website", "mysite.com", $info);
    }

    $information = "Visit our website";
    filter_var($information, FILTER_CALLBACK, array("options" => "covertwtoM"));
    ```
