# FlowBox specification repository

## Repository content

This repository contains all the API specifications needed to create a FlowBox agent compatible with the global FlowBox network. The specification is released as versioned packages in the release page of the repository.

In time, it will also contain the compatibility test suite.

## How to view the documentation

On each push, the documentation is updated at [RTFD](http://flowbox-spec.readthedocs.io/)

## How to build the documentation (to create a package)

### First build

We are using Sphinx to build this documentation. You need git and Python 2.7 installed on your machine. On some Linux distributions, virtualenv and pip are not part of the Python distributions and must also be installed.

On Windows, in a posh console:

```
git clone git@github.com:enioka/flowbox-spec.git
cd flowbox-spec
virtualenv.exe venv
. ./venv/Scripts/activate
pip install 
pip install Sphinx
sphinx-build -b html . target
```

This will create a "target" directory containing an HTML document for the whole documentation.

### Subsequent builds

```
cd flowbox-spec
. ./venv/Scripts/activate
sphinx-build -b html . target
```

Under *nix systems, this can also be run with make:
```
source ./venv/bin/activate
make html
```

## How to write some documentation

See... the documentation!
