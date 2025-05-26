import React, { useEffect, useState } from "react";
import { getDevices } from "../api/assetService";
import { PageDisplay } from "../components/layout/PageDisplay";
import { useParams } from "react-router-dom";
import { Table } from "../components/ui/Table";
import { PackageOpen, PackageOpenIcon } from "lucide-react";

export const AssetsPage = () => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { assetType } = useParams();

  // Cambiar el titulo de la pestaña y cargar la informacion
  useEffect(() => {
    document.title = "Activos | ITNetGROUP";

    const fetchDevices = async () => {
      try {
        const data = await getDevices();
        setDevices(data);
      } catch (error) {
        console.error("Error fetching devices:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDevices();
  }, []);

  // Diccionario para traducir los tipos de activos
  const dictionary = {
    computer: "Computadoras",
    monitor: "Monitores",
    user: "Usuarios",
    software: "Software",
    peripheral: "Perifericos",
    network: "Dispositivos de red",
  };

  // Filtrar los dispositivos por tipo
  const filteredDevices = devices.filter((device) => {
    const jsonData = JSON.parse(device.jsonData);
    return jsonData.itemtype.toLowerCase() === assetType;
  });

  const noDataMessage = (
    <div className="flex flex-col justify-center items-center text-base-content h-1/2">
      <PackageOpenIcon size={100} />
      <span className="text-3xl my-3">No data</span>
    </div>
  );

  // Cambiar contenido de la tabla dependiendo de algunos activos
  const getTableContent = (assetType) => {

    // Tabla de softwares
    if (assetType === "software") {
      return devices.length > 0 ? (
        <Table arrayColumnNames={["ID", "Nombre", "Distribuidor", "Version"]}>
          {/* rows  */}
          {devices.flatMap((device) => {
            let softwares = JSON.parse(device.jsonData).content.softwares;
            return softwares.map((software, index) => (
              <tr
                key={index}
                className="text-base-content hover:bg-base-300 transition-colors duration-200"
              >
                <td>{software.guid ?? 'No GUID'}</td>
                <td>{software.name}</td>
                <td>{software.publisher}</td>
                <td>{software.version ?? "Desconocido"}</td>
              </tr>
            ));
          })}
        </Table>
      ) : (
        noDataMessage
      );
    }

    // Tabla de monitores
    if (assetType === "monitor") {
      return devices.length > 0 ? (
        <Table arrayColumnNames={["Serial", "Fabricante", "Dispositivo"]}>
          {/* rows  */}
          {devices.flatMap((device) => {
            let monitors = JSON.parse(device.jsonData).content.monitors;
            return monitors.map((monitor) => (
              <tr
                key={monitor.serial}
                className="text-base-content hover:bg-base-300 transition-colors duration-200"
              >
                <td>{monitor.serial}</td>
                <td>{monitor.manufacturer}</td>
                <td>{device.id}</td>
              </tr>
            ));
          })}
        </Table>
      ) : (
        noDataMessage
      );
    }

    // Tabla de perifericos
    if (assetType === "peripheral") {
      return devices.length > 0 ? (
        <Table arrayColumnNames={["ID de producto", "Serial", "Nombre", "Fabricante", "Dispositivo"]}>
          {/* rows  */}
          {devices.flatMap((device) => {
            let peripherals = JSON.parse(device.jsonData).content.usbdevices;
            return peripherals.map((peripheral) => (
              <tr
                key={peripheral.productid}
                className="text-base-content hover:bg-base-300 transition-colors duration-200"
              >
                <td>{peripheral.productid}</td>
                <td>{peripheral.serial ?? 'No aplica'}</td>
                <td>{peripheral.name}</td>
                <td>{peripheral.manufacturer}</td>
                <td>{device.id}</td>
              </tr>
            ));
          })}
        </Table>
      ) : (
        noDataMessage
      );
    }
    
    // Tabla de dispositivos (default)
    return (
      filteredDevices.length > 0 ? (
        // Si encuentra activos de ese tipo, mostrar una tabla
        <Table arrayColumnNames={["ID", "Nombre", "Usuario asignado"]}>
          {/* rows  */}
          {filteredDevices.map((device) => (
            <tr
              key={device.id}
              className="text-base-content hover:bg-base-300 transition-colors duration-200"
            >
              <td>{device.id}</td>
              <td>{device.deviceName}</td>
              <td>{device.deviceUser}</td>
              {/* <td>Purple</td> */}
            </tr>
          ))}
        </Table>
      ) : (
        // Caso contrario, mostrar un mensaje
        noDataMessage
      )
    );
  };

  return (
    <PageDisplay>
      <div className="my-3 mx-2">
        <h1 className="text-2xl font-bold text-base-content">
          {dictionary[assetType].toUpperCase()}
        </h1>
        <p className="mt-2 text-base-content">
          Administra, filtra y busca todos tus activos TI.
        </p>
      </div>

      {/* Pantalla de carga */}
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-96">
          <span className="loading loading-infinity loading-xl text-base-content"></span>
          <span className="ml-4 text-lg text-base-content">
            Cargando datos...
          </span>
        </div>
      ) : (
        <>{getTableContent(assetType)}</>
      )}
    </PageDisplay>
  );
};
