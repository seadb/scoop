#!/bin/bash
psql -d scoop  < user/user.sql
psql -d scoop  < friend/friend.sql
psql -d scoop  < session/session.sql
