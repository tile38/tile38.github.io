#!/bin/bash
set -e

cd $(dirname "${BASH_SOURCE[0]}")

export GO15VENDOREXPERIMENT=1

go run *.go $@

