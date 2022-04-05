# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Convert 2 Spreadsheets
- [x] Dinocats and Aliens ERD(s)

### PK / FK
* uniquely identifying a record
* can be any data type
* always use autoincrementing integers
* the FK has to be the same data type

### Naming Conventions
* all fields/table names should be snake_case
* table names should always be plural
* always name the PK "id"
* FK should be the foreign table name singular + "_id" (user_id, planet_id)

### Data Types
* data used to be expensive $$$$
* postal code H0H 0H0       90210 00210
* +1 555-555-5555 string (555) 5555555
* data is cheap: use boolean, varchar, text, numeric

### Relationships
* one-to-one - one record in table A relates to only one record in table B
* one-to-many - one record in table A relates to one or more records in table B
* many-to-many - one or more records in table A relate to one or more records in table B (junction, join, bridge)

### Design Catchall
* require fields - initial state of the record
* default values - intelligent defaults (timestamps NOW(), rented false)
* calculated fields - single source of truth - calculate when you need it
* repeating values - pull repeating out to a separate table (lookup table)
* try not to delete anything - soft delete (boolean) active


|id|city|
|---|---|
|1|Calgary|
|2|Edmonton|

|id|mood|
|---|---|
|1|Happy|
|2|Sad|
|3|Meh|

City
Calgary city_id
Calgary
Calgary
Vancouver
Edmonton
Calgary

Saskatoon
Sasktoon
Stoon
Toontown





