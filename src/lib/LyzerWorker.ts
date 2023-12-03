let data: any[] = [];

self.onmessage = function(event) {
  const { method, args } = event.data;
  console.log('worker message', event.data)

  switch (method) {
    case 'load':
      load(args);
      break;
    case 'get':
      get();
      break;
    case 'update':
      update(args);
      break;
    default:
      console.error('Unknown method', method);
  }
};


function load(data: any[]) {
  data = data;
  self.postMessage({ method: 'load', status: 'success' });
}

function get() {
  self.postMessage({ method: 'get', data: data });
}

function update(modifyFunction: string) {
  let func = new Function('return ' + modifyFunction)();
  console.log('Function typeof:', typeof func)
  let res = func(data)
  console.log('Function res:', res)
  data = res;
  self.postMessage({ method: 'update', status: 'success', data: data });
}