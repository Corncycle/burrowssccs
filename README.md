# burrowssccs

A softcore CS script for The Kingdom of Loathing built with [create-kolmafia-script](https://socket.dev/npm/package/create-kolmafia-script)

This is (planned to be) a TS rewrite of an ash script I used for ~500 sccs ascensions which was heavily based on an old ash version of [bean-hccs](https://github.com/phulin/bean-hccs). 

This script is not intended to be applicable to an arbitrary account, and will almost certainly fail if your CS-relevant perms/iotms are not a superset of [mine](https://api.aventuristo.net/av-snapshot?u=burrows). 

It is assumed that the player character is a level 1 Seal Clubber under the Mongoose sign, taking pilsners and the pet sweater. The chateau should have the ceiling fan and be tuned to muscle substats (I don't use the painting in-run anymore, so just set it to something profitable for aftercore).

General information for the run is given at the following links:

Tests outline: https://docs.google.com/spreadsheets/d/1DfqPO_DJg4ybxafMgkyJ2MrMG5h2GNrhvOAH88CyLB8/edit#gid=0

Skills/IOTMs/shinies used: https://docs.google.com/spreadsheets/d/1DfqPO_DJg4ybxafMgkyJ2MrMG5h2GNrhvOAH88CyLB8/edit#gid=572413316

Route outline: https://docs.google.com/spreadsheets/d/1DfqPO_DJg4ybxafMgkyJ2MrMG5h2GNrhvOAH88CyLB8/edit#gid=720077073

The built script can be run by entering `burrowssccs` into the KoLmafia CLI.

# Build commands

Build the project from `/src`

```
yarn run build
```

Automatically rebuild while developing

```
yarn watch
```