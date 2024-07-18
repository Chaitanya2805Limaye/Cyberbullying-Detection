import h5py

def custom_load_model(filepath):
  with h5py.File(filepath, 'r') as f:
    # Load everything except the `input_length` attribute from the Embedding layer
    config = f.attrs['layer_name']
    filtered_config = {}
    for layer_name, layer_conf in config.items():
      if layer_name != 'embedding_2' or 'input_length' not in layer_conf.attrs:
        filtered_config[layer_name] = layer_conf

    # Load the model using the filtered config
    from keras.models import model_from_config
    model = model_from_config(filtered_config)

    # Reconstruct the layers
    from keras.layers import deserialize
    for layer_name, layer in zip(config, model.layers):
      model._layers[layer_name] = deserialize(layer_conf)

    return model

# Use the custom function to load the model
model = custom_load_model('model.h5')
