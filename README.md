This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.


```
ion-header, ion-content {
    --ion-background-color: #f8f8f8;
}

.icon {
    color: #004c97; 
}

.wa {
  &-navbar {
    padding: 16px 0;
    --background: #f8f8f8;
  }

  &-header__title {
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    color: #004c97;
  }

  &-zip {
    color: #004c97;

    button {
      background-color: transparent;
    }
  }

  &-input {
    color: #004c97;
  }

  &-nav__button {  
    button {
      background-color: transparent;
      padding: 0 5px !important;
    }
  }

  &-temp__location {
    color: #57524F;
    text-align: center;
    padding-top: 15px;
    font-size: 30px;
  }

  &-temp__container {
    background-color: #fff;
    color: #57524F;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  &-temp__current {
    font-size: 35px;
    color: #f99110;
    align-self: center;
  }

  &-temp__high-low {
    text-align: center;
    position: relative;
    top: -20px;
    color: #57524F;
    font-size: 18px;
  }

  &-temp__container-footer {
    border-top: 1px solid #d3d3d3;
    text-align: center;
    color: #57524F;
    font-size: 16px;
    margin: 15px 25px 0;
    padding-top: 10px;
    position: relative;
  }

}
```
