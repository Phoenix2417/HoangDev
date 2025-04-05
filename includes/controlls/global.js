/**
 * Global Controller cho Tạo Nhân Vật Ảo
 * File: includes/controllers/global.js
 * 
 * Module này cung cấp chức năng tạo và quản lý nhân vật ảo để trò chuyện.
 */

class VirtualCharacterController {
  constructor() {
    // Các mẫu tính cách nhân vật
    this.personalityTemplates = {
      thân_thiện: {
        đặc_điểm: ['vui vẻ', 'nhiệt tình', 'hòa đồng', 'thích giúp đỡ'],
        phong_cách_nói: 'thân thiện và tích cực',
        thích: ['gặp gỡ người mới', 'chia sẻ kiến thức', 'động viên người khác'],
        không_thích: ['tiêu cực', 'xung đột', 'làm phiền người khác']
      },
      dí_dỏm: {
        đặc_điểm: ['hài hước', 'dí dỏm', 'thông minh', 'nhanh trí'],
        phong_cách_nói: 'vui vẻ và đầy hài hước',
        thích: ['kể chuyện vui', 'đùa giỡn', 'tình huống hài hước'],
        không_thích: ['nghiêm túc quá mức', 'buồn chán', 'khuôn phép']
      },
      trí_tuệ: {
        đặc_điểm: ['thông thái', 'phân tích', 'tò mò', 'khách quan'],
        phong_cách_nói: 'trầm tĩnh và sâu sắc',
        thích: ['thảo luận ý tưởng', 'khám phá tri thức mới', 'giải quyết vấn đề'],
        không_thích: ['suy nghĩ hời hợt', 'thiếu logic', 'đơn giản hóa vấn đề phức tạp']
      },
      lãng_mạn: {
        đặc_điểm: ['mơ mộng', 'nhạy cảm', 'nghệ sĩ', 'giàu cảm xúc'],
        phong_cách_nói: 'đầy cảm xúc và thơ mộng',
        thích: ['nghệ thuật', 'cảm xúc sâu sắc', 'chia sẻ tâm tình'],
        không_thích: ['thực dụng quá mức', 'vô cảm', 'thiếu trí tưởng tượng']
      },
      thực_tế: {
        đặc_điểm: ['thẳng thắn', 'thiết thực', 'chính xác', 'hiệu quả'],
        phong_cách_nói: 'trực tiếp và rõ ràng',
        thích: ['sự thật', 'hiệu quả', 'giải pháp cụ thể'],
        không_thích: ['mơ hồ', 'lãng phí thời gian', 'không thiết thực']
      },
      bí_ẩn: {
        đặc_điểm: ['sâu sắc', 'khó đoán', 'phức tạp', 'suy tư'],
        phong_cách_nói: 'bí ẩn và đầy ẩn dụ',
        thích: ['những câu đố', 'bí ẩn', 'ý nghĩa sâu xa'],
        không_thích: ['đơn điệu', 'dễ đoán', 'hời hợt']
      }
    };

    // Mẫu nhân vật theo nghề nghiệp
    this.roleTemplates = {
      cố_vấn: {
        kiến_thức: ['tâm lý học', 'giải quyết vấn đề', 'lắng nghe'],
        nhiệm_vụ: 'đưa ra lời khuyên và hỗ trợ tinh thần',
        câu_nói_mẫu: ['Bạn đã thử phương pháp nào chưa?', 'Tôi hiểu cảm giác của bạn', 'Hãy xem xét từ góc độ này']
      },
      giáo_viên: {
        kiến_thức: ['giáo dục', 'học thuật', 'phương pháp giảng dạy'],
        nhiệm_vụ: 'truyền đạt kiến thức và hướng dẫn học tập',
        câu_nói_mẫu: ['Để hiểu vấn đề này, trước tiên chúng ta cần...', 'Bạn có thể suy nghĩ theo cách này', 'Hãy thử áp dụng lý thuyết vào thực tế']
      },
      người_bạn: {
        kiến_thức: ['đồng cảm', 'lắng nghe', 'chia sẻ'],
        nhiệm_vụ: 'đồng hành và chia sẻ trong cuộc sống hàng ngày',
        câu_nói_mẫu: ['Kể tôi nghe về ngày hôm nay của bạn', 'Tôi luôn ở đây để lắng nghe bạn', 'Chúng ta cùng giải quyết vấn đề này nhé']
      },
      chuyên_gia: {
        kiến_thức: ['chuyên môn sâu', 'phân tích dữ liệu', 'giải pháp kỹ thuật'],
        nhiệm_vụ: 'cung cấp thông tin chuyên sâu và tư vấn chuyên môn',
        câu_nói_mẫu: ['Dựa trên dữ liệu hiện tại', 'Nghiên cứu cho thấy rằng', 'Một cách tiếp cận hiệu quả là']
      },
      nghệ_sĩ: {
        kiến_thức: ['sáng tạo', 'nghệ thuật', 'cảm hứng'],
        nhiệm_vụ: 'truyền cảm hứng và thúc đẩy sáng tạo',
        câu_nói_mẫu: ['Hãy thử một cách tiếp cận mới', 'Cảm xúc của bạn là nguồn cảm hứng', 'Đôi khi nghệ thuật nằm ở sự không hoàn hảo']
      }
    };

    // Tùy chọn tùy biến ngoại hình
    this.appearanceOptions = {
      giới_tính: ['Nam', 'Nữ', 'Phi nhị nguyên'],
      độ_tuổi: ['Thanh niên', 'Trung niên', 'Cao niên', 'Không xác định'],
      phong_cách: ['Hiện đại', 'Cổ điển', 'Tối giản', 'Sáng tạo', 'Học thuật', 'Thể thao'],
      màu_sắc_chủ_đạo: ['Xanh dương', 'Đỏ', 'Tím', 'Xanh lá', 'Vàng', 'Cam', 'Hồng', 'Đen', 'Trắng']
    };

    // Lịch sử tương tác và học hỏi
    this.characterMemory = {};
    this.conversationHistory = {};

    // Khởi tạo sự kiện
    this.initEventListeners();
  }

  /**
   * Khởi tạo các sự kiện lắng nghe cho giao diện tạo nhân vật
   */
  initEventListeners() {
    // Phương thức này sẽ kết nối với các phần tử DOM trong môi trường trình duyệt
    console.log('Đã khởi tạo các sự kiện cho tạo nhân vật ảo');
  }

  /**
   * Tạo một nhân vật ảo mới với các thuộc tính được chỉ định
   * @param {string} tên - Tên nhân vật
   * @param {string} tính_cách - Loại tính cách (từ personalityTemplates)
   * @param {string} vai_trò - Vai trò (từ roleTemplates)
   * @param {Object} ngoại_hình - Tùy chọn ngoại hình
   * @param {Object} tùy_chỉnh - Các tùy chỉnh thêm (tùy chọn)
   * @returns {Object} Đối tượng nhân vật được tạo
   */
  tạoNhânVật(tên, tính_cách, vai_trò, ngoại_hình, tùy_chỉnh = {}) {
    if (!this.personalityTemplates[tính_cách]) {
      throw new Error(`Loại tính cách không hợp lệ: ${tính_cách}`);
    }

    if (!this.roleTemplates[vai_trò]) {
      throw new Error(`Vai trò không hợp lệ: ${vai_trò}`);
    }

    // Sao chép mẫu để tránh sửa đổi bản gốc
    const mẫuTínhCách = JSON.parse(JSON.stringify(this.personalityTemplates[tính_cách]));
    const mẫuVaiTrò = JSON.parse(JSON.stringify(this.roleTemplates[vai_trò]));

    // Tạo nhân vật cơ bản
    const nhânVật = {
      id: this.tạoIdNhânVật(),
      tên: tên,
      tính_cách: tính_cách,
      vai_trò: vai_trò,
      đặc_điểm_tính_cách: mẫuTínhCách.đặc_điểm,
      phong_cách_nói: mẫuTínhCách.phong_cách_nói,
      thích: mẫuTínhCách.thích,
      không_thích: mẫuTínhCách.không_thích,
      kiến_thức: mẫuVaiTrò.kiến_thức,
      nhiệm_vụ: mẫuVaiTrò.nhiệm_vụ,
      câu_nói_mẫu: mẫuVaiTrò.câu_nói_mẫu,
      ngoại_hình: this.xácThựcNgoạiHình(ngoại_hình),
      tiểu_sử: tùy_chỉnh.tiểu_sử || this.tạoTiểuSửMặcĐịnh(tên, tính_cách, vai_trò),
      chủ_đề_yêu_thích: tùy_chỉnh.chủ_đề_yêu_thích || [],
      ngày_tạo: new Date()
    };

    // Áp dụng các tùy chỉnh bổ sung
    if (tùy_chỉnh.đặc_điểm_bổ_sung) {
      nhânVật.đặc_điểm_tính_cách = [...nhânVật.đặc_điểm_tính_cách, ...tùy_chỉnh.đặc_điểm_bổ_sung];
    }

    if (tùy_chỉnh.kiến_thức_bổ_sung) {
      nhânVật.kiến_thức = [...nhânVật.kiến_thức, ...tùy_chỉnh.kiến_thức_bổ_sung];
    }

    // Khởi tạo bộ nhớ cho nhân vật
    this.characterMemory[nhânVật.id] = {
      chủ_đề_đã_thảo_luận: [],
      thông_tin_người_dùng: {},
      sở_thích_người_dùng: {},
      cuộc_trò_chuyện_gần_đây: []
    };

    // Khởi tạo lịch sử trò chuyện
    this.conversationHistory[nhânVật.id] = [];

    console.log(`Đã tạo nhân vật: ${tên}, Tính cách: ${tính_cách}, Vai trò: ${vai_trò}`);
    return nhânVật;
  }

  /**
   * Tạo tiểu sử mặc định cho nhân vật
   * @param {string} tên - Tên nhân vật
   * @param {string} tính_cách - Loại tính cách
   * @param {string} vai_trò - Vai trò
   * @returns {string} Tiểu sử mặc định
   */
  tạoTiểuSửMặcĐịnh(tên, tính_cách, vai_trò) {
    const mẫuTínhCách = this.personalityTemplates[tính_cách];
    const mẫuVaiTrò = this.roleTemplates[vai_trò];

    return `${tên} là một nhân vật có tính cách ${mẫuTínhCách.đặc_điểm.join(', ')}. 
    Với vai trò là ${vai_trò}, ${tên} đặc biệt giỏi về ${mẫuVaiTrò.kiến_thức.join(', ')}. 
    ${tên} nói chuyện một cách ${mẫuTínhCách.phong_cách_nói} và luôn sẵn sàng ${mẫuVaiTrò.nhiệm_vụ}.`;
  }

  /**
   * Xác thực và định dạng các tùy chọn ngoại hình
   * @param {Object} ngoại_hình - Các tùy chọn ngoại hình đã yêu cầu
   * @returns {Object} Tùy chọn ngoại hình đã xác thực
   */
  xácThựcNgoạiHình(ngoại_hình) {
    const đãXácThực = {};

    // Xác thực giới tính
    if (ngoại_hình.giới_tính && this.appearanceOptions.giới_tính.includes(ngoại_hình.giới_tính)) {
      đãXácThực.giới_tính = ngoại_hình.giới_tính;
    } else {
      đãXácThực.giới_tính = this.appearanceOptions.giới_tính[0];
    }

    // Xác thực độ tuổi
    if (ngoại_hình.độ_tuổi && this.appearanceOptions.độ_tuổi.includes(ngoại_hình.độ_tuổi)) {
      đãXácThực.độ_tuổi = ngoại_hình.độ_tuổi;
    } else {
      đãXácThực.độ_tuổi = this.appearanceOptions.độ_tuổi[0];
    }

    // Xác thực phong cách
    if (ngoại_hình.phong_cách && this.appearanceOptions.phong_cách.includes(ngoại_hình.phong_cách)) {
      đãXácThực.phong_cách = ngoại_hình.phong_cách;
    } else {
      đãXácThực.phong_cách = this.appearanceOptions.phong_cách[0];
    }

    // Xác thực màu sắc chủ đạo
    if (ngoại_hình.màu_sắc_chủ_đạo && this.appearanceOptions.màu_sắc_chủ_đạo.includes(ngoại_hình.màu_sắc_chủ_đạo)) {
      đãXácThực.màu_sắc_chủ_đạo = ngoại_hình.màu_sắc_chủ_đạo;
    } else {
      đãXácThực.màu_sắc_chủ_đạo = this.appearanceOptions.màu_sắc_chủ_đạo[0];
    }

    // Thêm mô tả ngoại hình tùy chỉnh nếu có
    if (ngoại_hình.mô_tả) {
      đãXácThực.mô_tả = ngoại_hình.mô_tả;
    }

    // Thêm hình đại diện nếu có
    if (ngoại_hình.hình_đại_diện) {
      đãXácThực.hình_đại_diện = ngoại_hình.hình_đại_diện;
    } else {
      đãXácThực.hình_đại_diện = `nhân_vật_${this.tạoIdNhânVật()}.png`;
    }

    return đãXácThực;
  }

  /**
   * Tạo tin nhắn từ nhân vật dựa trên ngữ cảnh và đầu vào
   * @param {string} characterId - ID của nhân vật
   * @param {string} đầu_vào - Nội dung tin nhắn đầu vào
   * @param {Object} ngữ_cảnh - Thông tin ngữ cảnh bổ sung (tùy chọn)
   * @returns {string} Phản hồi của nhân vật
   */
  tạoTinNhắn(characterId, đầu_vào, ngữ_cảnh = {}) {
    const nhânVật = this.tìmNhânVật(characterId);
    if (!nhânVật) {
      throw new Error(`Không tìm thấy nhân vật với ID: ${characterId}`);
    }

    // Phân tích đầu vào để xác định chủ đề và cảm xúc
    const phânTíchĐầuVào = this.phânTíchĐầuVào(đầu_vào);

    // Cập nhật bộ nhớ của nhân vật
    this.cậpNhậtBộNhớ(characterId, phânTíchĐầuVào, ngữ_cảnh);

    // Tạo phản hồi dựa trên phân tích và tính cách nhân vật
    const phảnHồi = this.tạoPhảnHồi(nhânVật, phânTíchĐầuVào, ngữ_cảnh);

    // Lưu cuộc trò chuyện vào lịch sử
    this.conversationHistory[characterId].push({
      thời_gian: new Date(),
      người_dùng: đầu_vào,
      nhân_vật: phảnHồi
    });

    // Giới hạn lịch sử trò chuyện để tránh quá nhiều dữ liệu
    if (this.conversationHistory[characterId].length > 100) {
      this.conversationHistory[characterId] = this.conversationHistory[characterId].slice(-100);
    }

    return phảnHồi;
  }

  /**
   * Phân tích đầu vào của người dùng
   * @param {string} đầu_vào - Tin nhắn đầu vào
   * @returns {Object} Kết quả phân tích
   */
  phânTíchĐầuVào(đầu_vào) {
    // Trong thực tế, đây có thể là phân tích NLP phức tạp hơn
    // Đơn giản hóa cho ví dụ này
    const từKhóaChủĐề = {
      thể_thao: ['bóng đá', 'thể thao', 'bóng rổ', 'tennis', 'thi đấu'],
      công_nghệ: ['máy tính', 'điện thoại', 'phần mềm', 'internet', 'AI', 'robot'],
      âm_nhạc: ['nhạc', 'bài hát', 'ca sĩ', 'nhạc sĩ', 'concert', 'album'],
      sức_khỏe: ['sức khỏe', 'bệnh', 'tập luyện', 'dinh dưỡng', 'khỏe mạnh'],
      giáo_dục: ['học', 'trường', 'giáo dục', 'kiến thức', 'sách', 'đọc']
    };

    const từKhóaCảmXúc = {
      vui: ['haha', 'vui', 'thích', 'cười', 'hạnh phúc', ':)', '😊', '😀'],
      buồn: ['buồn', 'khó chịu', 'thất vọng', ':(', '😔', '😢'],
      tức_giận: ['tức giận', 'bực', 'khó chịu', 'phiền', '😠', '😡'],
      ngạc_nhiên: ['wow', 'thật sao', 'không thể tin', 'ngạc nhiên', '😲', '😮'],
      lo_lắng: ['lo lắng', 'sợ', 'căng thẳng', 'áp lực', '😰', '😟']
    };

    // Chuyển đổi đầu vào thành chữ thường để so sánh dễ dàng hơn
    const đầuVàoChữThường = đầu_vào.toLowerCase();

    // Xác định chủ đề
    let chủĐề = [];
    Object.keys(từKhóaChủĐề).forEach(chủ_đề => {
      if (từKhóaChủĐề[chủ_đề].some(từ => đầuVàoChữThường.includes(từ))) {
        chủĐề.push(chủ_đề);
      }
    });

    // Xác định cảm xúc
    let cảmXúc = [];
    Object.keys(từKhóaCảmXúc).forEach(cảm_xúc => {
      if (từKhóaCảmXúc[cảm_xúc].some(từ => đầuVàoChữThường.includes(từ))) {
        cảmXúc.push(cảm_xúc);
      }
    });

    // Phát hiện câu hỏi
    const làCâuHỏi = đầuVàoChữThường.includes('?') || 
      ['ai', 'ở đâu', 'khi nào', 'tại sao', 'như thế nào', 'cái gì', 'làm sao', 'có phải'].some(
        từ => đầuVàoChữThường.includes(từ)
      );

    return {
      chủ_đề: chủĐề.length > 0 ? chủĐề : ['chung'],
      cảm_xúc: cảmXúc.length > 0 ? cảmXúc : ['trung_lập'],
      là_câu_hỏi: làCâuHỏi,
      độ_dài: đầu_vào.length
    };
  }

  /**
   * Cập nhật bộ nhớ của nhân vật dựa trên tương tác mới
   * @param {string} characterId - ID của nhân vật
   * @param {Object} phânTích - Kết quả phân tích đầu vào
   * @param {Object} ngữCảnh - Thông tin ngữ cảnh bổ sung
   */
  cậpNhậtBộNhớ(characterId, phânTích, ngữCảnh) {
    if (!this.characterMemory[characterId]) {
      this.characterMemory[characterId] = {
        chủ_đề_đã_thảo_luận: [],
        thông_tin_người_dùng: {},
        sở_thích_người_dùng: {},
        cuộc_trò_chuyện_gần_đây: []
      };
    }

    const bộNhớ = this.characterMemory[characterId];

    // Cập nhật chủ đề đã thảo luận
    phânTích.chủ_đề.forEach(chủ_đề => {
      if (!bộNhớ.chủ_đề_đã_thảo_luận.includes(chủ_đề)) {
        bộNhớ.chủ_đề_đã_thảo_luận.push(chủ_đề);
      }
    });

    // Lưu thông tin người dùng từ ngữ cảnh nếu có
    if (ngữCảnh.thông_tin_người_dùng) {
      Object.assign(bộNhớ.thông_tin_người_dùng, ngữCảnh.thông_tin_người_dùng);
    }

    // Lưu sở thích người dùng nếu được phát hiện
    if (ngữCảnh.sở_thích_người_dùng) {
      Object.assign(bộNhớ.sở_thích_người_dùng, ngữCảnh.sở_thích_người_dùng);
    }

    // Lưu trữ cuộc trò chuyện gần đây (giới hạn 5 tin nhắn gần nhất)
    bộNhớ.cuộc_trò_chuyện_gần_đây.push({
      thời_gian: new Date(),
      phân_tích: phânTích
    });

    if (bộNhớ.cuộc_trò_chuyện_gần_đây.length > 5) {
      bộNhớ.cuộc_trò_chuyện_gần_đây.shift();
    }
  }

  /**
   * Tạo phản hồi từ nhân vật dựa trên phân tích và tính cách
   * @param {Object} nhânVật - Đối tượng nhân vật
   * @param {Object} phânTích - Kết quả phân tích đầu vào
   * @param {Object} ngữCảnh - Thông tin ngữ cảnh bổ sung
   * @returns {string} Phản hồi của nhân vật
   */
  tạoPhảnHồi(nhânVật, phânTích, ngữCảnh) {
    // Trong một ứng dụng thực tế, đây là nơi bạn có thể tích hợp với API GPT hoặc 
    // một mô hình NLP khác để tạo phản hồi phù hợp với tính cách nhân vật
    
    // Danh sách câu chào và kết thúc phù hợp với tính cách
    const câuChào = {
      thân_thiện: ['Xin chào bạn!', 'Chào bạn thân mến!', 'Rất vui được gặp bạn!'],
      dí_dỏm: ['Yo! Có gì hot không?', 'Chào bạn, ngày hôm nay thế nào?', 'Hế lô! Đời vẫn vui chứ?'],
      trí_tuệ: ['Xin chào.', 'Chào bạn, hôm nay chúng ta sẽ thảo luận về điều gì?', 'Rất vui được trò chuyện với bạn.'],
      lãng_mạn: ['Xin chào người bạn thân mến...', 'Chào bạn, thật tuyệt vời khi được gặp bạn!', 'Xin chào, cảm ơn vì đã đến trò chuyện cùng tôi.'],
      thực_tế: ['Chào.', 'Xin chào, bạn cần gì?', 'Chào bạn, tôi có thể giúp gì?'],
      bí_ẩn: ['Chào... bạn tìm kiếm điều gì?', 'Xin chào người lạ...', 'Chào bạn... thú vị khi gặp bạn.']
    };

     const câuKếtThúc = {
      dí_dỏm: ['Nói tiếp đi, tôi đang nghe này!', 'Còn gì hot nữa không?', 'Vui quá, kể tiếp đi!'],
      trí_tuệ: ['Bạn có câu hỏi nào khác không?', 'Chúng ta có thể thảo luận sâu hơn nếu bạn muốn.', 'Hy vọng thông tin này hữu ích.'],
      lãng_mạn: ['Thật là một cuộc trò chuyện tuyệt vời...', 'Tôi sẽ nhớ những khoảnh khắc này...', 'Cảm ơn bạn đã chia sẻ.'],
      thực_tế: ['Cần thêm thông tin gì nữa không?', 'Tôi có thể giúp gì thêm?', 'Hãy cho tôi biết nếu bạn cần hỗ trợ.'],
      bí_ẩn: ['Bạn có còn điều gì muốn hỏi?...', 'Câu chuyện vẫn chưa kết thúc...', 'Tôi cảm nhận được nhiều điều từ bạn...']
    };

    // Chọn ngẫu nhiên câu chào và kết thúc phù hợp
    const chào = câuChào[nhânVật.tính_cách][Math.floor(Math.random() * câuChào[nhânVật.tính_cách].length)];
    const kếtThúc = câuKếtThúc[nhânVật.tính_cách][Math.floor(Math.random() * câuKếtThúc[nhânVật.tính_cách].length)];

    // Xác định phong cách phản hồi dựa trên tính cách
    let phảnHồi = '';
    
    // Xử lý câu hỏi
    if (phânTích.là_câu_hỏi) {
      phảnHồi = this.xửLýCâuHỏi(nhânVật, phânTích);
    } 
    // Xử lý theo cảm xúc
    else if (phânTích.cảm_xúc.length > 0 && phânTích.cảm_xúc[0] !== 'trung_lập') {
      phảnHồi = this.xửLýCảmXúc(nhânVật, phânTích);
    }
    // Xử lý theo chủ đề
    else if (phânTích.chủ_đề.length > 0 && phânTích.chủ_đề[0] !== 'chung') {
      phảnHồi = this.xửLýChủĐề(nhânVật, phânTích);
    }
    // Phản hồi mặc định
    else {
      phảnHồi = nhânVật.câu_nói_mẫu[Math.floor(Math.random() * nhânVật.câu_nói_mẫu.length)];
    }

    // Kết hợp tất cả thành phản hồi hoàn chỉnh
    return `${chào} ${phảnHồi} ${kếtThúc}`;
  }

  /**
   * Xử lý câu hỏi từ người dùng
   * @param {Object} nhânVật - Đối tượng nhân vật
   * @param {Object} phânTích - Kết quả phân tích đầu vào
   * @returns {string} Phản hồi phù hợp
   */
  xửLýCâuHỏi(nhânVật, phânTích) {
    // Kiểm tra xem câu hỏi có liên quan đến kiến thức của nhân vật không
    const chủĐềLiênQuan = phânTích.chủ_đề.find(chủ_đề => 
      nhânVật.kiến_thức.some(kiến_thức => 
        kiến_thức.toLowerCase().includes(chủ_đề)
      )
    );

    if (chủĐềLiênQuan) {
      // Nếu có kiến thức về chủ đề
      const câuTrảLời = [
        `Theo hiểu biết của tôi về ${chủĐềLiênQuan}, `,
        `Với vai trò ${nhânVật.vai_trò} của tôi, tôi có thể trả lời rằng `,
        `Đây là một câu hỏi thú vị về ${chủĐềLiênQuan}. Theo tôi, `
      ];
      
      return câuTrảLời[Math.floor(Math.random() * câuTrảLời.length)] + 
             nhânVật.câu_nói_mẫu[Math.floor(Math.random() * nhânVật.câu_nói_mẫu.length)];
    } else {
      // Nếu không có kiến thức về chủ đề
      const câuTrảLời = [
        `Tôi không chắc về câu trả lời cho câu hỏi này. `,
        `Đây không phải là lĩnh vực chuyên môn của tôi. `,
        `Tôi ước mình có thể giúp bạn với câu hỏi này, nhưng `
      ];
      
      return câuTrảLời[Math.floor(Math.random() * câuTrảLời.length)] + 
             `bạn có thể hỏi tôi về ${nhânVật.kiến_thức.join(', ')}`;
    }
  }

  /**
   * Xử lý cảm xúc từ người dùng
   * @param {Object} nhânVật - Đối tượng nhân vật
   * @param {Object} phânTích - Kết quả phân tích đầu vào
   * @returns {string} Phản hồi phù hợp
   */
  xửLýCảmXúc(nhânVật, phânTích) {
    const cảmXúc = phânTích.cảm_xúc[0];
    
    // Phản hồi theo cảm xúc và tính cách nhân vật
    const phảnHồiCảmXúc = {
      vui: {
        thân_thiện: ['Thật tuyệt khi thấy bạn vui vẻ!', 'Niềm vui của bạn thật lan tỏa!'],
        dí_dỏm: ['Haha, bạn đang rất vui nhỉ! Kể tôi nghe đi!', 'Vui quá nhỉ, cùng chia sẻ nào!'],
        trí_tuệ: ['Cảm xúc tích cực luôn đem lại hiệu quả tốt.', 'Vui vẻ là trạng thái lý tưởng để học hỏi.'],
        lãng_mạn: ['Niềm vui của bạn như ánh nắng ấm áp...', 'Hạnh phúc thật đẹp phải không bạn?'],
        thực_tế: ['Vui vẻ là tốt, nhưng đừng quá phấn khích.', 'Cảm xúc tích cực giúp giải quyết vấn đề tốt hơn.'],
        bí_ẩn: ['Nụ cười của bạn ẩn chứa nhiều điều...', 'Hạnh phúc... thật khó nắm bắt phải không?...']
      },
      buồn: {
        thân_thiện: ['Tôi rất tiếc khi nghe điều này. Bạn muốn chia sẻ thêm không?', 'Tôi ở đây để lắng nghe bạn.'],
        dí_dỏm: ['Đừng buồn nữa, tôi sẽ kể bạn nghe chuyện vui nhé!', 'Buồn ư? Hãy thử nghĩ về những điều tốt đẹp!'],
        trí_tuệ: ['Buồn là cảm xúc tự nhiên, quan trọng là cách ta đối mặt.', 'Mọi cảm xúc đều có giá trị riêng.'],
        lãng_mạn: ['Nỗi buồn của bạn như một bản nhạc trầm...', 'Đôi khi buồn giúp ta thấu hiểu bản thân hơn...'],
        thực_tế: ['Buồn bã không giải quyết được vấn đề. Bạn cần giúp gì không?', 'Hãy tập trung vào giải pháp.'],
        bí_ẩn: ['Nỗi buồn... có phải là thông điệp từ sâu thẳm?...', 'Đôi khi buồn mới là sự thật...']
      }
      // Có thể thêm các cảm xúc khác tương tự
    };

    // Kiểm tra xem có phản hồi phù hợp không
    if (phảnHồiCảmXúc[cảmXúc] && phảnHồiCảmXúc[cảmXúc][nhânVật.tính_cách]) {
      return phảnHồiCảmXúc[cảmXúc][nhânVật.tính_cách][
        Math.floor(Math.random() * phảnHồiCảmXúc[cảmXúc][nhânVật.tính_cách].length)
      ];
    }

    // Phản hồi mặc định nếu không tìm thấy phản hồi phù hợp
    return nhânVật.câu_nói_mẫu[Math.floor(Math.random() * nhânVật.câu_nói_mẫu.length)];
  }

  /**
   * Xử lý chủ đề từ người dùng
   * @param {Object} nhânVật - Đối tượng nhân vật
   * @param {Object} phânTích - Kết quả phân tích đầu vào
   * @returns {string} Phản hồi phù hợp
   */
  xửLýChủĐề(nhânVật, phânTích) {
    const chủĐề = phânTích.chủ_đề[0];
    
    // Kiểm tra xem chủ đề có trong sở thích của nhân vật không
    if (nhânVật.thích.some(sở_thích => sở_thích.includes(chủĐề))) {
      return `Tôi rất thích nói về ${chủĐề}! ` + 
             nhânVật.câu_nói_mẫu[Math.floor(Math.random() * nhânVật.câu_nói_mẫu.length)];
    }
    
    // Kiểm tra xem chủ đề có trong không thích của nhân vật không
    if (nhânVật.không_thích.some(không_thích => không_thích.includes(chủĐề))) {
      return `Tôi không thực sự quan tâm đến ${chủĐề}. ` +
             `Chúng ta có thể nói về ${nhânVật.thích.join(' hoặc ')} không?`;
    }
    
    // Phản hồi chung về chủ đề
    return `Về ${chủĐề}, ` + 
           nhânVật.câu_nói_mẫu[Math.floor(Math.random() * nhânVật.câu_nói_mẫu.length)];
  }

  /**
   * Tìm nhân vật bằng ID
   * @param {string} characterId - ID của nhân vật
   * @returns {Object|null} Đối tượng nhân vật hoặc null nếu không tìm thấy
   */
  tìmNhânVật(characterId) {
    // Trong thực tế, đây sẽ là nơi truy vấn database hoặc hệ thống lưu trữ
    // Ở đây chỉ là minh họa
    return Object.values(this.characterMemory).some(mem => mem.id === characterId) ? 
           { /* đối tượng nhân vật */ } : null;
  }

  /**
   * Tạo ID ngẫu nhiên cho nhân vật
   * @returns {string} ID duy nhất
   */
  tạoIdNhânVật() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }
}

// Xuất lớp controller để sử dụng ở nơi khác
module.exports = VirtualCharacterController;
