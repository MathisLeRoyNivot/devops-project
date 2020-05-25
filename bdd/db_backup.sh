#!/bin/bash

directory_name="$(date +'%Y-%m-%d')"
backup_file_name="backup_$(date +'%Y%m%d-%H%M%S').xb.gpg"
full_file_path="$directory_name/$backup_file_name"

mariabackup --user=root --password=test --backup --stream=xbstream | gpg -c --passphrase SECRET --batch --yes -o $full_file_path
printf "New backup file available: %s\n" "$full_file_path"