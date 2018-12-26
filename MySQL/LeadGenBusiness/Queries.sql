-- 1. What query would you run to get the total revenue for March of 2012?
select monthname(charged_datetime) as Month, sum(amount) as revenue
from billing
where monthname(charged_datetime) = 'March' and year(charged_datetime) = 2012;

-- 2. What query would you run to get total revenue collected from the client with an id of 2?
select client_id, sum(amount) as total_revenue
from billing
where client_id = 2;

-- 3. What query would you run to get all the sites that client=10 owns?
select domain_name as websites, client_id
from sites
where client_id = 10;

-- 4. What query would you run to get total # of sites created per month per year for the client with an id of 1? What about for client=20?
select client_id, count(domain_name) as number_of_websites, monthname(created_datetime) as month_created, year(created_datetime) as year_created
from sites
where client_id =1
group by year(created_datetime), month(created_datetime);

select client_id, count(domain_name) as number_of_websites, monthname(created_datetime) as month_created, year(created_datetime) as year_created
from sites
where client_id =20
group by year(created_datetime), month(created_datetime);

-- 5. What query would you run to get the total # of leads generated for each of the sites between January 1, 2011 to February 15, 2011?
select sites.domain_name, count(leads.leads_id) as number_of_leads, date_format(leads.registered_datetime,'%M %e %Y') as date_generated
from sites
left join leads on sites.site_id = leads.site_id
where leads.registered_datetime between '2011/01/01' AND '2011/02/15'
group by leads_id;

-- 6. What query would you run to get a list of client names and 
-- the total # of leads we've generated for each of our clients between January 1, 2011 to December 31, 2011?
select concat_ws(' ', clients.first_name, clients.last_name) as client_name, count(leads.leads_id) as number_of_leads
from sites
left join leads on sites.site_id = leads.site_id
left join clients on sites.client_id = clients.client_id
where leads.registered_datetime between '2011/01/01' AND '2011/12/31'
group by clients.client_id
order by number_of_leads desc;

-- 7. What query would you run to get a list of client names and the 
-- total # of leads we've generated for each client each month between months 1 - 6 of Year 2011?
select concat_ws(' ', clients.first_name, clients.last_name) as client_name, count(leads.leads_id) as number_of_leads, monthname(leads.registered_datetime) as month_generated
from sites
left join leads on sites.site_id = leads.site_id
left join clients on sites.client_id = clients.client_id
where leads.registered_datetime between '2011/01/01' AND '2011/06/31'
group by clients.client_id, month(leads.registered_datetime)
order by month(leads.registered_datetime);

-- 8. What query would you run to get a list of client names and the total # of leads we've generated for 
-- each of our clients' sites between January 1, 2011 to December 31, 2011? Order this query by client id.  
-- Come up with a second query that shows all the clients, the site name(s), and the total number of leads generated from each site for all time.
select concat_ws(' ', clients.first_name, clients.last_name) as client_name, sites.domain_name as websites, count(leads.leads_id) as number_of_leads, date_format(leads.registered_datetime,'%M %e %Y') as date_generated
from sites
left join leads on sites.site_id = leads.site_id
left join clients on sites.client_id = clients.client_id
where leads.registered_datetime between '2011/01/01' AND '2011/12/31'
group by sites.domain_name
order by clients.client_id;

select concat_ws(' ', clients.first_name, clients.last_name) as client_name, sites.domain_name as websites, count(leads.leads_id) as number_of_leads
from sites
left join leads on sites.site_id = leads.site_id
left join clients on sites.client_id = clients.client_id
group by sites.domain_name
order by clients.client_id;

-- 9. Write a single query that retrieves total revenue collected from each client for each month of the year. Order it by client id.
select concat_ws(' ', clients.first_name, clients.last_name) as client_name, sum(billing.amount) as total_revenue, monthname(billing.charged_datetime) as month_charged, year(billing.charged_datetime) as year_charged
from clients
left join billing on clients.client_id = billing.client_id
group by clients.client_id,month(billing.charged_datetime), year(billing.charged_datetime)
order by clients.client_id, year(billing.charged_datetime);

-- 10. Write a single query that retrieves all the sites that each client owns. 
-- Group the results so that each row shows a new client. It will become clearer when you add a new field called 'sites' 
-- that has all the sites that the client owns. (HINT: use GROUP_CONCAT)
select concat_ws(' ', clients.first_name, clients.last_name) as client_name, group_concat(sites.domain_name separator '/ ') as sites
from clients
left join sites on clients.client_id = sites.client_id
group by clients.client_id;
