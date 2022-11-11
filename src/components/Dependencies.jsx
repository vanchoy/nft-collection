import packageJson from '../../package.json';

import TableContainer from './table/TableContainer';

const Dependencies = (props) => {
  const pkgDependencies = packageJson.dependencies;
  let allPkgs = [], pkgsVersions = [], pkgsNames = [];

  const tableHeadings = 
  <>
    <th>
      <p>Package Name</p>
    </th>
    <th>
      <p>Installed Version</p>
    </th>
  </>
  ;

  Object.keys(pkgDependencies).forEach((name) => {
    if (name === '' || pkgDependencies[name] === '') {
      if (name === '') {
        console.log(`There is an empty package name with version "${pkgDependencies[name]}"`);
      } else if (pkgDependencies[name] === '') {
        console.log(`Empty version value of the package "${name}" in package.json`);
      }
    } else {
      allPkgs.push([name, pkgDependencies[name]]);
      pkgsNames.push(name);
      pkgsVersions.push(pkgDependencies[name]);
    }
  });

  const packages = () => {
    if (pkgsNames.length === pkgsVersions.length) {
      
      const temp1 = allPkgs.map((el, i) => {
        const name = el[0];
        let version = el[1];

        version = version.replace('^', '');
        version = version.replace('*', '');

        return (
          <tr key={i}>
            <td>
              <p>
                <a
                  target="_blank"
                  title="Open docs for the latest package version"
                  rel="noopener noreferrer"
                  href={`https://npmjs.com/package/${name}`}
                >
                  {name}
                </a>
              </p>
            </td>
            <td>
              <p>
                <a
                  target="_blank"
                  title="Open docs for the currently installed package version"
                  rel="noopener noreferrer"
                  href={`https://npmjs.com/package/${el[0]}/v/${version}`}
                >
                  {version}
                </a>
              </p>
            </td>
          </tr>
        );

      });
      return temp1;
    }
  };

  return (
    <TableContainer 
      tableWidth={props.tableWidth}
      tableMaxHeight={props.tableMaxHeight}
      tableHeaderColor={props.tableHeaderColor}
      tableHeaderTextColor={props.tableHeaderTextColor}
      tableHeaders={tableHeadings} 
      tableInfo={packages()} 
    />
  );
};

export default Dependencies;
