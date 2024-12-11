# **Naming**

## Naming Conventions

### React

- PascalCase: React Component and React Component Filename,
- UPPERCASE: constant, enum
- camelCase: variable, function, javascript Filename
- hyphens: URLs
- underscore: NONE

### SQL

- underscore and singular

`database_name`, `table_name`, `column_name`, `id`, `forign_key_id`

## Synonym

### item/data

- pieces piece
- volumes volume
- units unit
- facts fact
- sets set

### Function name

- API
- Standard Restfull API: getEntityById, getEntities, postEntity, patchEntity, deleteEntity
- Complex/Combined API: doEntity, performEntity

- Redux
- Standard: updateEntity(partial change), changeEntity(total replace), resetEntity
- Async: fetchEntityById, fetchEntities, pushEntity, removeEntity
- complex Action: saveEntity, loadEntity

- Used Verb: get, post, patch, delete, update, change, fetch, push, remove

### Others Options Word list

```
Get /set
Add /remove
Create /destroy
Start /stop
Open /close
Read /write
Load /save
begin/end
backup/ restore
import /export
split /merge
inject /extract
attach/detach
bind /separate
view/browse
edit /modify
select /mark
copy /paste
undo /redo
insert /delete
add /append
index /sort
find /search
increase /decrease
play /pause
launch /run
compile /execute
debug /trace
observe /listen
build /publish
input /output
encode /decode
encrypt /decrypt
compress /decompress
Pack /unpack
parse /emit
connect /disconnect
send/receive
download/upload
Refresh /synchronize
update /revert
lock /unlock

Submit /commit
push/pull
Expand /collapse
begin /end
start /finish
enter /exit
abort /quit
obsolete/depreciate
collect /aggregate
```

## Comment

Eg:

```js

- Descriptions ...
-
- @type {enumeration}
- @param {Boolean} para1
- @param {Array|Object} para2: The collection to iterate over.
- @param {Function} para3: The function invoked per iteration.
- @returns {Array} Returns the new mapped array.
- @since 1.0.0
- @example
-
- eg1: ...
  \*/
```

# **Principle**

## Solid Principle

ref1: https://learnku.com/articles/4160/solid-notes-on-object-oriented-design-and-programming-oodoop

ref2: https://www.c-sharpcorner.com/UploadFile/damubetha/solid-principles-in-C-Sharp/

> _SRP - Single Responsibility Principle_

> _OCP - Opened Closed Principle_

- add new function for new requirement, not change existing function
- open for extension, close for modification

> _LSP - Liskov Substitution Principle_

- subclass can replace superclass without error
- override method from superclass should keep same input and output parameters

- https://stackify.com/solid-design-liskov-substitution-principle/
- https://stackoverflow.com/questions/56860/what-is-an-example-of-the-liskov-substitution-principle

> _ISP Interface Segregation Principle_

- break interface to small, not fat interface

> _DIP Dependency Inversion Principle_

- high-level class depends on abstract/interface, not low-level classes

## Design Pattern

创建型：单例模式、抽象工厂模式、建造者模式、工厂模式、原型模式

结构型：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式

行为型：模版方法模式、命令模式、迭代器模式、观察者模式、中介者模式、备忘录模式、解释器模式、状态模式、策略模式、职责链模式(责任链模式)、访问者模式

# **Syntax**

## SQL statements

### DQL Query

- Doctrine Query Language
- SELECT column FROM table WHERE condition

> _Select Oprations_

- MIN | MAX | COUNT | SUM | AVG
- DISTINCT
- AS

> _Where Conditions_

- AND | OR
- LIKE
- IN | NOT IN
- BETWEEN value1 AND value2
- EXISTS | ANY | ALL

> _Others_

- LIMIT OFFSET
- ORDER BY column1 ASC | DESC
- GROUP BY
- INNER JOIN | FUll JOIN | RIGHT JOIN | LEFT JOIN
- HAVING
- CASE

```sql
SELECT column1, column2 FROM table1 WHERE column1='value1'

SELECT MIN(column1) FROM table1
SELECT DISTINCT column1 FROM table1
SELECT column1 AS "column1Alias" FROM table1

SELECT * FROM table1 WHERE column1='value1' AND column2='value2'
SELECT * FROM table1 WHERE column1 LIKE '%A%'
SELECT * FROM table1 WHERE column1 IN ('value1', 'value2', 'value2')
SELECT * FROM table1 WHERE column1 BETWEEN 'value1' AND 'value2'

SELECT * FROM table1 LIMIT 20 OFFSET 40
SELECT * FROM table1 ORDER BY column1 DESC
SELECT MIN(column1), column2 FROM table1 GROUP BY column2
SELECT * FROM table1 INNER JOIN table2 ON table1.column1 = table2.column1
SELECT COUNT(customer_id), country FROM customers GROUP BY country HAVING COUNT(customer_id) > 5;
```

### Manipulation DML

- Data Manipulation Language
- make changes to the database, including CRUD

> _Manipulation Operations_

- INSERT INTO
- UPDATE SET WHERE
- DELETE

```sql
INSERT INTO table1 (column1, column2) VALUES ('value1', 'value2')
INSERT INTO table1 (column1, column2) VALUES ('value1', 'value2'), ('value3', 'value4')
UPDATE table1 SET column1 = 'value1', column2 = 'value2' WHERE column3 = 'value3'
DELETE FROM table1 WHERE column2 = 'value2'
```

### DDL Schema Definition

- DDL Data Definition Language
- create and modify the structure of objects

> _Database Operations_

- CREATE DATABASE
- DROP DATABASE
- BACKUP DATABASE database1 TO DISK

> _Table Operations_

- CREATE TABLE
- DROP TABLE
- ALTER TABLE
- ADD
- DROP COLUMN
- RENAME COLUMN old_name to new_name;
- MODIFY COLUMN

> _Constraints_

- NOT NULL | UNIQUE | PRIMARY KEY | AUTO_INCREMENT
- FOREIGN KEY
- CHECK
- DEFAULT

> _Others_

- CREATE INDEX

```sql
CREATE DATABASE database1
DROP DATABASE database1
BACKUP DATABASE database1 TO DISK = 'filepath'

CREATE TABLE Table1 ( column1 int,  column2 varchar(255) )
DROP TABLE table1
ALTER TABLE table1 ADD column1 varchar(255)
ALTER TABLE table1 DROP COLUMN column1
ALTER TABLE table1 RENAME COLUMN column1 to column2
ALTER TABLE table1 MODIFY COLUMN column1 varchar(255)


CREATE TABLE table1 ( Age int, CHECK (Age>=18) )
CREATE TABLE Persons (  City varchar(255) DEFAULT 'Sandnes' )


CREATE INDEX
```

### TCL Transaction Control Language

- COMMIT
- ROLLBACK
- SAVEPOINT

```
COMMIT: Commit command is used to permanently save any transaction into the database.
ROLLBACK: This command restores the database to last committed state. It is also used with savepoint command to jump to a savepoint in a transaction.
SAVEPOINT: Savepoint command is used to temporarily save a transaction so that you can rollback to that point whenever necessary.
```

### DCL (Data Control Language)

- GRANT
- REVOKE

```
GRANT: allow specified users to perform specified tasks.
REVOKE: cancel previously granted or denied permissions.
```

## Nodejs

### Childprocess

- child_process.exec()
- child_process.execFile()
- child_process.fork()
- child_process.execSync()
- child_process.execFileSync()

```js
const { exec } = require('node:child_process');
```

### EventLoop

```
     ┌───────────────────────────┐
  ┌─>│           poll            │ ---> synchronous Code
  │  └─────────────┬─────────────┘
  │           nextTickQueue        ---> process.nextTick, promise
  │  ┌─────────────┴─────────────┐
  │  │           check           │ ---> setImmediate
  │  └─────────────┬─────────────┘
  │           nextTickQueue
  │  ┌─────────────┴─────────────┐
  │  │       close callbacks     │
  │  └─────────────┬─────────────┘
  |           nextTickQueue
  │  ┌─────────────┴─────────────┐
  │  │           timers          │ ---> setTimeout
  │  └─────────────┬─────────────┘
  │           nextTickQueue
  │  ┌─────────────┴─────────────┐
  │  │     pending callbacks     │
  │  └─────────────┬─────────────┘
  │           nextTickQueue
  │  ┌─────────────┴─────────────┐
  └──┤        idle, prepare      │
     └───────────────────────────┘
```

## CSS Statement

### Grid Display

- display: grid;

> _Container Property_

- grid-template-columns: auto auto auto auto;
- grid-template-rows: 80px 200px;
- justify-content: space-around;
- align-content: center;

> _Grid Property_

- grid-column: 1 / span 3;
- grid-row: 1 / span 2;
- grid-area: 1 / 1 / span 2 / span 3;

# **Regular Expression**

Testing website: https://regex101.com/

## 优先级

\ 转义符

() [] 圆括号和方括号

{n,m} 限定符

^, $, \任何元字符、任何字符 定位点和序列（即：位置和顺序）

| 或 例如: (m|f)ood 匹配"mood"或"food"

## Anchor

```
^ Start of String

$ End of String

\b 单词的开始或结束

\D 任意非数字的字符

\B 不是单词开头或结束的位置
```

## Assertion

include look-ahead, look-behind, and conditional expressions

```
x(?=y) Lookahead

/Jack(?=Sprat|Frost)/ matches "Jack" only if it is followed by "Sprat" or "Frost", neither

"Sprat" nor "Frost" is part of the match results
```

```
Windows(?=95|98|NT|2000)
Match Windows in "Windows2000",
NotMatch Windows in "Windows3.1"
```

x(?!y) Negative lookahead

```
Windows(?=95|98|NT|2000)
Match Windows in "Windows3.1"，
NotMatch Windows in "Windows2000"
```

(?<=y)x Lookbehind

```
(?<=95|98|NT|2000)Windows
Match Windows in "2000Windows",
NotMatch Windows in "3.1Windows"
```

(?<!y)x Negative lookbehind

### NotSure

(pattern) 匹配 pattern 并获取这一匹配

(?:pattern) industr(?:y|ies) 等于 industry|industries

## Groups and ranges

```
[characters] to match all characters

\w Any word characters, equal to [a-zA-Z0-9_]
\W Any not word characters
. Any not newline
\S Any not whitespace(space, tab, newline), equal to [\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
[ \f\r\t\n] Any whitespace
\s Any whitespace

[xyz]
[^xyz]
[a-z]
[^a-z] Any not a-z
[A-Z]
[a-zA-Z] Any a-z and A-Z

[0-9] Any number
[0-9\.\-] number or \. or \-
\d Any number
\D 任意非数字的字符
```

## Special character

`\specialCharacter` to represent specialCharacter\

```
. use \.
\ use \\
( use \(
) use \)
[ use \[
{ use \{
- use \+
* use \*
$ use \$
| use \|
/ use \/
\t tab
\r carriage return
\n newline
```

## Quantifiers

```
a? 0-1 of a
a\* 0-Any of a
a+ 1-Any of a
a{n} exactly n of a
a{n,} n-Any of a
{n,m} n-m of a
? 非贪婪 例如: 'o+?'匹配单个 "o"，'o+'匹配所有'o'
```

Eg: numbers only

```js
var str = 'asd1234';
var patt = /[0-9]+/;
document.write(str.match(patt)); // 1234;
```

Eg: input value to money form

```js
$('input').keyup( function(){
  if (!St ring.prototype.splice) {
      String.prototype.splice = function(start, delCount, newSubStr) {
          return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
      };
  }
  var value = $(this).val();
  value = value.match(/\d+/g).join("");
  for( i=3 ; i<value.length; i+=4){
      value = value.splice(i, 0, ",");
  }
  if( $(this).val()  ){
      value = '$'.concat(value);
  }
  $(this).val( value);
})
```

Eg: Money

```
pat="^\d+(\.)\d{2}$"

0.00 => true
01.00 => true
01,00 => false
0,00 => flase
0.000 => false
0-01 => false
```

### 4 Digital Number Only

```
Pat = '\d{4}'
```

Eg: URL Check

```js
function is_valid_domain_name($domain_name) {
  //valid chars check
  return (
    preg_match(
      /^([a-z\d](-*[a-z\d])*)(\.([a-z\d](-*[a-z\d])*))*$/i,
      $domain_name
    ) &&
    preg_match('/^.{1,253}$/', $domain_name) && //overall length check
    preg_match(/^[^\.]{1,63}(\.[^\.]{1,63})*$/, $domain_name)
  ); //length of each label
}
```
