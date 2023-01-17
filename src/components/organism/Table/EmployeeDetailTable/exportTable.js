import moment from 'moment';
const ExportTable = ({ data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>DOB</th>
          <th> Phone Number</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Branch</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Pincode</th>
          <th>Reporting To</th>
          <th>Role</th>
          <th>Is Vehicle</th>
          <th colSpan="6">Vehicles Details</th>
        </tr>
        <tr>
          <th> </th>
          <th></th>
          <th></th>
          <th> </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Reg No</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Fuel Type</th>
          <th>Transmission</th>
          <th>Chassis No</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, reIndex) => {
          return item?.hasVehicles === true ? (
            <>
              <tr key={reIndex}>
                <td rowSpan={item.vehiclesOwned.length}>{item?.uniqueId}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.fullName}</td>
                <td rowSpan={item.vehiclesOwned.length}>
                  {item?.dateOfBirth !== null
                    ? moment(item?.dateOfBirth).format('YYYY-MM-DD')
                    : '-'}
                </td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.mobileNumber}</td>
                <td rowSpan={item.vehiclesOwned.length}> {item?.email}</td>
                <td rowSpan={item.vehiclesOwned.length}> {item?.gender}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.location}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.deptName}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.designation}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.currentAddress?.address}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.currentAddress?.city}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.currentAddress?.state}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.currentAddress?.pinCode}</td>
                <td rowSpan={item.vehiclesOwned.length}>{item?.repName}</td>
                <td rowSpan={item.vehiclesOwned.length}> {item?.role}</td>
                <td rowSpan={item.vehiclesOwned.length}>Yes</td>
                <td>{item?.vehiclesOwned && item.vehiclesOwned[0]?.regNumber}</td>
                <td>{item?.vehiclesOwned && item.vehiclesOwned[0]?.brand}</td>
                <td>{item?.vehiclesOwned && item.vehiclesOwned[0]?.model}</td>
                <td>{item?.vehiclesOwned && item.vehiclesOwned[0]?.fuelType}</td>
                <td>{item?.vehiclesOwned && item.vehiclesOwned[0]?.transmission}</td>
                <td>{item?.vehiclesOwned && item.vehiclesOwned[0]?.chassisNumber}</td>
              </tr>
              {item?.vehiclesOwned?.map((item, index) => {
                return index !== 0 ? (
                  <tr key={index}>
                    <td>{item?.regNumber}</td>
                    <td>{item?.brand}</td>
                    <td>{item?.model}</td>
                    <td>{item?.fuelType}</td>
                    <td>{item?.transmission}</td>
                    <td>{item?.chassisNumber}</td>
                  </tr>
                ) : (
                  ''
                );
              })}
            </>
          ) : (
            <tr>
              <td>{item?.uniqueId}</td>
              <td>{item?.fullName}</td>
              <td>
                {item?.dateOfBirth !== null ? moment(item?.dateOfBirth).format('YYYY-MM-DD') : '-'}
              </td>
              <td>{item?.mobileNumber}</td>
              <td> {item?.email}</td>
              <td> {item?.gender}</td>
              <td>{item?.location}</td>
              <td>{item?.deptName}</td>
              <td>{item?.designation}</td>
              <td>{item?.currentAddress?.address}</td>
              <td>{item?.currentAddress?.city}</td>
              <td>{item?.currentAddress?.state}</td>
              <td>{item?.currentAddress?.pinCode}</td>
              <td>{item?.repName}</td>
              <td> {item?.role}</td>
              <td>No</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ExportTable;
