<h1 align="center">:link: Devops Project :link:</h1>

[![Generic badge](https://img.shields.io/badge/Contributors-3-green.svg)](https://shields.io/) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/MathisLeRoyNivot/devops-project/blob/master/LICENSE)

[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://forthebadge.com)

<h2 align="center">

:snake: **Python** :snake:</br>
Programmable Logic Controller (**PLC**)

</h2>

## Installation

### **Build image**

```docker
docker build -t <image_name> .
```

Example :

```docker
docker build -t plc-python .
```

### **Run image**

> Run image by passing two additional arguments, the **unit number** and the **automaton quantity** per unit

```docker
docker run <image_name> <UNIT_NUM> <AUTOMATON_QTY>
```

Example :
> Run the built image named *plc-python* with unit #1 and 10 automatons for this unit

```docker
docker run plc-python 1 10
```

## Documentations

- [**General project's documentation**](https://github.com/MathisLeRoyNivot/devops-project "Go to general project's documentation")

## Contributors :computer:

- [Adrien VAUCARD](https://github.com/adrienvaucard "Go to @adrienvaucard's Github")
- [Mathis LE ROY-NIVOT](https://github.com/MathisLeRoyNivot "Go to @MathisLeRoyNivot's Github")
- [Tanguy POTIER](https://github.com/tanguy85 "Go to @tanguy85's Github")

## License :white_check_mark:

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/MathisLeRoyNivot/devops-project/blob/master/LICENSE)