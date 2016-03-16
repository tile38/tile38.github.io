#!/bin/bash
set -e

cd $(dirname "${BASH_SOURCE[0]}")

src/website/build.sh

cp -rf src/website/_output/* .

rm -rf src/website/_output
