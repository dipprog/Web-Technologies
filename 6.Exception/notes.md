# Exception

An `exception` is a generalization of the concept of an error to include any unexpected condition encountered during executation.

Exception Handling:

- `Try`
- `Catch`
- `Finally`
- `throw`

Each `try` block must have at least one corresponding `catch` or `finally` block.

Code within the `finally` block will always be executed after the try and catch blocks, regardless of whether an exception has been thrown and before normal execution resumes.

If an exception is not caught, a fatal error will be issued with an "Uncaught Exception" message.

```php

$a = 8;

try {
    if ($a >= 10) {
        echo $a;
    } else {
        throw new Exception("Enter value greater than 10.");
    }
} catch(Exception $e) {
    echo $e->getMessage();
} finally {
    echo "THIS WILL RUN ALWAYS...";
}

```
