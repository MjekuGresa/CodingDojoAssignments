-- 1. What query would you run to get all the customers inside city_id = 312? 
-- Your query should return customer first name, last name, email, and address.
select city.city_id, city.city,customer.first_name, customer.last_name, customer.email, address.address
from city
join address on city.city_id = address.city_id
join customer on address.address_id = customer.address_id
where city.city_id = 312;

-- 2. What query would you run to get all comedy films? 
-- Your query should return film title, description, release year, rating, special features, and genre (category).
select film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
from film
join film_category on film.film_id= film_category.film_id
join category on film_category.category_id = category.category_id
where category.name = 'Comedy';

-- 3. What query would you run to get all the films joined by actor_id=5? 
-- Your query should return the actor id, actor name, film title, description, and release year.
select actor.actor_id, concat_ws(' ',first_name,last_name) AS actor_name, film.film_id, film.title, film.description, film.release_year
from actor
join film_actor on actor.actor_id = film_actor.actor_id
join film on film_actor.film_id = film.film_id
where film_actor.actor_id = 5;

-- 4. What query would you run to get all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)? 
-- Your query should return customer first name, last name, email, and address.
select store.store_id,city.city_id,customer.first_name,customer.last_name,customer.email,address.address
from customer
join store on customer.store_id = store.store_id
join address on customer.address_id = address.address_id
join city on address.city_id = city.city_id
where store.store_id = 1 AND city.city_id IN (1,42,312,459);

-- 5. What query would you run to get all the films with a "rating = G" and "special feature = behind the scenes", 
-- joined by actor_id = 15? Your query should return the film title, description, release year, rating, and special feature. 
-- Hint: You may use LIKE function in getting the 'behind the scenes' part.
select film.title, film.description, film.release_year, film.rating, film.special_features
from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
where film.rating = 'G' AND film.special_features LIKE '%behind the scenes' AND actor.actor_id = 15;

-- 6. What query would you run to get all the actors that joined in the film_id = 369? 
-- Your query should return the film_id, title, actor_id, and actor_name.
select film.film_id, film.title, actor.actor_id, concat_ws(' ', actor.first_name, actor.last_name) AS actor_name
from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
where film.film_id = 369;

-- 7. What query would you run to get all drama films with a rental rate of 2.99? 
-- Your query should return film title, description, release year, rating, special features, and genre (category).
select film.film_id,film.title, film.description, film.release_year, film.rating, film.special_features, category.name, film.rental_rate
from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where category.name = 'Drama' AND film.rental_rate = 2.99;

-- 8. What query would you run to get all the action films which are joined by SANDRA KILMER? 
-- Your query should return film title, description, release year, rating, special features, genre (category), and actor's first name and last name.
select actor_found.actor_id, actor_found.actor_name, actor_found.film_id, 
category_found.title, category_found.description, category_found.release_year, category_found.rating, 
category_found.special_features, category_found.genre
from (select actor.actor_id, concat_ws(' ', actor.first_name, actor.last_name) AS actor_name, film.film_id, film.title
from actor
join film_actor on actor.actor_id = film_actor.actor_id
join film on film_actor.film_id = film.film_id
where actor.first_name = 'Sandra' AND actor.last_name = 'KILMER') AS actor_found
join (select film.film_id, film.title, category.name AS genre, film.description, film.release_year, film.rating, film.special_features
from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where category.name = 'ACTION') AS category_found
ON actor_found.film_id = category_found.film_id























