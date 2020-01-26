# Handling DB changes

## Migrations

Using migrations is a way of updating / managing our MySQL DataBases.
We use this method through PHP migration files located in `src/Migrations`.  
Whith those files we can create, update or delete any field or table in our DB.

Whenever a change is made in our Entities, a migration file should be generated and executed to change the DB accordingly.  
This means that during the development of our project, we will have to migrate several number of times.

---

### Case 1: Everything's alright

##### So you just `git` pulled the `dev` branch and there's a new migration file.

By default, it's name should look like `Version20200124104827.php`
Where `Version-2020-01-24-10-48-27.php` is `Version-YYYY-MM-DD-HH-mm-ss.php`

Whenever you have one of those, all you have to do is :

- Check your current PWD (you should be in `projet-ofoot/o-foot`)
- Type `symfony console doctrine:migrations:migrate`
  - This will tell symfony to run a check in the src/Migrations folder and apply any migrations you don't already have.

### Case 2: `Houston, we've got a problem, do you copy ?!`

#### So you've been told by the backend devs that you have to drop your whole database and migrate again with the new migration files.

This time, simply migrating shows you errors because .. sh\*t happens.
And the backend devs modified the old migration file instead of creating a new one.  
Because .. Well, you know.

Let's rumble a bit with our database :

- Drop your current database
  - `symfony console doctrine:database:drop`
    This will give you a warning, explaining you what you're trying to do.
    It also tells you to append `--force` to your command in order to execute it.
  - `symfony console d:d:d --force`
    And voilà, your DB has been droped / erased.
    You can check on localhost/phpmyadmin : it's gone.
- Create you database back
  - `symfony console doctrine:database:create`
    This will create a DB according to your .env or .env.local
- Migrate again and avoid migrains
  - `symfony console d:m:m`

In both cases, if everything goes **smoothly** / **as intended** you should see something like this :

```bash
++ finished in 660.7ms
++ used 16M memory
++ 1 migrations executed
++ 28 sql queries
```

###### Easy Peasy Lemon Squeezie / Winner Winner Chicken Dinner

### Congratulations ! Now go back to work. :heart:

---

You can also type `bin/console d:m:m` instead of `symfony console doctrine:m:m`.  
But we **strongly recommend** using the `symfony` command to avoid any troubles.

---

If it still doesn't work, please contact your local @FéeDeuspi .
