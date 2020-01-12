#!/usr/bin/env bash

started_at=$(date +"%s")

# Run Sequalize's migrations.
echo "-----> Running application migrations"
sequelize db:migrate
echo ""

# Run Sequalize's seeds.
echo "-----> Running application seeds"
sequelize db:seed:all
echo "<----- Seeds created"

ended_at=$(date +"%s")

minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"
