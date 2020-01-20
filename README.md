# O'Foot
----

## App aiming at improving amateur soccer clubs' management
O'Foot provides a simple yet powerful interface to manage your soccer club with ease.  

-----

## Installation

- Install dependencies :
  - `composer install`
  - `yarn install`

- Create .env.local :
    - `touch .env.local`
    - Paste `DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/ofoot?serverVersion=5.7`
    - Replace `db_user` & `db_password` with your SQL credentials

- Create the database :
    - `symfony console doctrine:database:create` OR `symfony console d:d:c`

- Import the DB structure :
    - `symfony console doctrine:migrations:migrate` OR `symfony console d:m:m`
    - Type `y` to confirm modifications


## Usage : 

- Run the Symfony & Webpack servers :
  - `symfony serve -d`
  - `yarn start`

-----

## Team :
- Béranger Benoit - Symfony - Lead Dev Back
- Cebrail Aktas - Symfony - Git Master
- Marine Berthier - React - Project Manager / Scrum Master
- Mickaël Rassicot - React - Lead Dev Front
- Pedro Cascao - Symfony - Product Owner
