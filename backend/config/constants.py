import os
import pytz

##############################
# Config
##############################

STATUS = (
    ('active', 'Active'),
    ('inactive', 'Inactive'),
    ('deleted', 'Deleted'),
)
STATUS_DICT = dict(STATUS)

CATEGORIES = (
    ('main-dishes', 'Main-Dishes'),
    ('kids', 'Kids'),
    ('hot', 'Hot'),
    ('burger','Burger')
)
CATEGORIES_DICT = dict(CATEGORIES)
