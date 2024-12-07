docker run -it --rm \
  --user $(id -u):$(id -g) \
  -v "$(pwd)":/libjpeg-turbo -w /libjpeg-turbo \
  libjpeg-turbo bash -login