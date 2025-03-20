import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  ConnectionLineType,
} from 'reactflow';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserPlus, 
  FaTrash, 
  FaTree, 
  FaSearch, 
  FaUser, 
  FaMars, 
  FaVenus 
} from 'react-icons/fa';
import 'reactflow/dist/style.css';

// Tipe data anggota keluarga
type AnggotaKeluarga = {
  id: string;
  nama: string;
  jenisKelamin: 'L' | 'P';
  hubungan?: string;
  tanggalLahir?: string;
  pasangan?: string;
  orangTua?: string[];
};

const SilsilahKu: React.FC = () => {
  // State untuk pohon keluarga
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  // State untuk form dan modal
  const [anggotaKeluarga, setAnggotaKeluarga] = useState<AnggotaKeluarga[]>([]);
  const [modalTambah, setModalTambah] = useState(false);
  const [formData, setFormData] = useState<Partial<AnggotaKeluarga>>({
    jenisKelamin: 'L'
  });

  // Daftar hubungan keluarga
  const daftarHubungan = [
    'Ayah', 'Ibu', 'Anak', 'Kakak', 'Adik', 
    'Paman', 'Bibi', 'Kakek', 'Nenek', 
    'Sepupu', 'Menantu', 'Cucu'
  ];

  // Komponen Node Kustom untuk Pohon Keluarga
  const NodeKeluarga = ({ data }: { data: AnggotaKeluarga }) => {
    return (
      <div className={`
        w-40 p-3 rounded-lg shadow-md 
        ${data.jenisKelamin === 'L' ? 'bg-blue-100' : 'bg-pink-100'}
      `}>
        <div className="flex items-center space-x-2">
          {data.jenisKelamin === 'L' ? (
            <FaMars className="text-blue-500" />
          ) : (
            <FaVenus className="text-pink-500" />
          )}
          <h3 className="font-semibold">{data.nama}</h3>
        </div>
      </div>
    );
  };

  // Daftar node kustom
  const nodeTypes = {
    keluarga: NodeKeluarga,
  };

  // Tambah anggota keluarga
  const tambahAnggotaKeluarga = () => {
    if (!formData.nama) return;

    const anggotaBaru: AnggotaKeluarga = {
      id: Date.now().toString(),
      nama: formData.nama || '',
      jenisKelamin: formData.jenisKelamin || 'L',
      hubungan: formData.hubungan,
      tanggalLahir: formData.tanggalLahir
    };

    // Tambah node baru
    const newNode: Node = {
      id: anggotaBaru.id,
      type: 'keluarga',
      data: anggotaBaru,
      position: { 
        x: Math.random() * 500, 
        y: 50 
      },
    };

    // Update state
    setNodes((nodes) => [...nodes, newNode]);
    setAnggotaKeluarga([...anggotaKeluarga, anggotaBaru]);
    
    // Reset form
    setFormData({ jenisKelamin: 'L' });
    setModalTambah(false);
  };

  // Hapus anggota keluarga
  const hapusAnggotaKeluarga = (id: string) => {
    setNodes((nodes) => nodes.filter(node => node.id !== id));
    setAnggotaKeluarga((anggota) => anggota.filter(a => a.id !== id));
    
    // Hapus edge terkait
    setEdges((edges) => 
      edges.filter(edge => edge.source !== id && edge.target !== id)
    );
  };

  // Hubungkan edge
  const onConnect = useCallback(
    (params: Connection) => 
      setEdges((eds) => addEdge({ 
        ...params, 
        type: ConnectionLineType.Smooth 
      }, eds)),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex">
      {/* Sidebar Kiri */}
      <div className="w-96 bg-white shadow-lg p-6 overflow-y-auto">
        <div className="flex items-center space-x-4 mb-6">
          <FaTree className="text-4xl text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">SilsilahKu</h1>
        </div>

        {/* Tombol Tambah Anggota */}
        <button 
          onClick={() => setModalTambah(true)}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 mb-6 flex items-center justify-center space-x-2"
        >
          <FaUserPlus />
          <span>Tambah Anggota Keluarga</span>
        </button>

        {/* Daftar Anggota Keluarga */}
        <div className="space-y-4">
          {anggotaKeluarga.map((anggota) => (
            <div 
              key={anggota.id} 
              className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <div className="flex items-center space-x-2">
                  {anggota.jenisKelamin === 'L' ? (
                    <FaMars className="text-blue-500" />
                  ) : (
                    <FaVenus className="text-pink-500" />
                  )}
                  <span className="font-semibold">{anggota.nama}</span>
                </div>
                {anggota.hubungan && (
                  <p className="text-sm text-gray-600">{anggota.hubungan}</p>
                )}
              </div>
              <button 
                onClick={() => hapusAnggotaKeluarga(anggota.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Area Pohon Keluarga */}
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-50 h-screen"
        >
          <Background color="#aaa" gap={16} />
          <Controls />
        </ReactFlow>
      </div>

      {/* Modal Tambah Anggota */}
      <AnimatePresence>
        {modalTambah && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center space-x-3">
                  <FaUserPlus />
                  <span>Tambah Anggota Keluarga</span>
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Masukkan nama lengkap"
                      value={formData.nama || ''}
                      onChange={(e) => setFormData({...formData, nama: e.target.value})}
                      className="text-gray-800 w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Jenis Kelamin
                    </label>
                    <select 
                      value={formData.jenisKelamin}
                      onChange={(e) => setFormData({...formData, jenisKelamin: e.target.value as 'L' | 'P'})}
                      className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="L">Laki-laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Hubungan
                    </label>
                    <select 
                      value={formData.hubungan || ''}
                      onChange={(e) => setFormData({...formData, hubungan: e.target.value})}
                      className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Pilih Hubungan</option>
                      {daftarHubungan.map(hub => (
                        <option key={hub} value={hub}>{hub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Tanggal Lahir
                  </label>
                  <input 
                    type="date" 
                    value={formData.tanggalLahir || ''}
                    onChange={(e) => setFormData({...formData, tanggalLahir: e.target.value})}
                    className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex justify-between space-x-4 pt-4">
                  <button 
                    onClick={() => setModalTambah(false)}
                    className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    Batal
                  </button>
                  <button 
                    onClick={tambahAnggotaKeluarga}
                    disabled={!formData.nama}
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SilsilahKu;
