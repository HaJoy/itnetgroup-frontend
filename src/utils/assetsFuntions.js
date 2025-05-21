export const getComputers = (data) => {
  const result = data.filter(
    (device) => JSON.parse(device.jsonData).itemtype === "Computer"
  ).length;

  return result;
};

export const getMonitors = (data) => {
    let count = 0;
    data.map((device) => {
        count += JSON.parse(device.jsonData).content.monitors.length
    });

    return count;
};

export const getSoftware = (data) => {
    let count = 0;
    data.map((device) => {
        count += JSON.parse(device.jsonData).content.softwares.length
    });

    return count;
};

export const getPerfs = (data) => {
    let count = 0;
    data.map((device) => {
        count += JSON.parse(device.jsonData).content.usbdevices.length
    });

    return count;
};

export const getNumUsers = (data) => {
    let count = 0;
    data.map((device) => {
        count += JSON.parse(device.jsonData).content.users.length
    });

    return count;
};
