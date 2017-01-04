#!/bin/bash
psql -d scoop -U chelsea < user/user.sql
psql -d scoop -U chelsea < session/session.sql
